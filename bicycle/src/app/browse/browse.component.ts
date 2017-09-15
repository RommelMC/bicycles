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
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getBikes();
  }

  getBikes(){
    this.apiService.getBikes().then(result => {
      this.allBikes = result;
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

}
