import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  allBikes = [];
  currUser = {};
  showBikes = [];
  searchItem = {item:""};
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getBikes();
  }

  getBikes(){
    this.apiService.getBikes().then(result => {
      this.allBikes = result;
      this.showBikes = this.allBikes;
    })
  }

  getCurrentUser(){
    this.apiService.getCurrentUser().then(result => {
      this.currUser = result;
    })
  }

  deleteBike(bike){
    this.apiService.deleteBike(bike);
    this.getBikes();
  }

  contact(owner){
    alert("email: " + owner);
  }

  search(){
    console.log("ahhh");
    this.showBikes = [];
    for(var i = 0; i < this.allBikes.length; i++){
      console.log(i);
      if(this.allBikes[i].title.indexOf(this.searchItem.item) != -1){
        this.showBikes.push(this.allBikes[i]);
      }
    }
  }
}
