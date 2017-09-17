import { Bicycle } from './../bicycle';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  bicycle = new Bicycle();
  bikeErrors = [];
  allBikes = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getBikes();
  }

  createBike(){
    this.apiService.createBike(this.bicycle).then(result => {
      console.log("OOOOO");
      if(result != null){
        if(result.errors){
          for(var x in result.errors){
            if(x != '__proto__')
              this.bikeErrors.push(result.errors[x].message);
          }
        }
      }
      this.bicycle = new Bicycle();
      this.getBikes();
    });
  }
  
  getBikes(){
    this.apiService.getMyBikes().then(result => {
      console.log(result);
      this.allBikes = result;
    })
  }

  updateBike(bike){
    this.apiService.updateBike(bike);
  }

  deleteBike(bike){
    console.log("delete");
    this.apiService.deleteBike(bike);
    this.getBikes();
  }
}
