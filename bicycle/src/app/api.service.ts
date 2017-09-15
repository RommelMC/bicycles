import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from './user';
import { Bicycle } from './bicycle';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  registerUser(user: User){
    return this._http.post('/register', user).map(data => data.json()).toPromise();
  } 

  login(info){
    return this._http.post('/login', info).map(data=>data.json()).toPromise();
  }

  createBike(bicycle: Bicycle){
    return this._http.post('/listings/create', bicycle).map(data=>data.json()).toPromise();
  }

  getBikes(){
    return this._http.get('listings/bikes').map(data=>data.json()).toPromise();
  }

  getMyBikes(){
    return this._http.get('listings/mybikes').map(data=>data.json()).toPromise();
  }

  getCurrentUser(){
    return this._http.get('currentUser').map(data=>data.json()).toPromise();
  }

  updateBike(bike){
    return this._http.post('/listings/bikes/update/'+bike._id, bike).map(data=>data.json()).toPromise();
  }

  deleteBike(bike){
    return this._http.delete('/listings/bikes/delete/'+bike._id).map(data=>data.json()).toPromise();
  }

  logoff(){
    return this._http.get('/logoff').map(data=>data.json()).toPromise();
  }

  getRandomBike(){
    return this._http.get('/randombike').map(data=>data.json()).toPromise();
  }
}
