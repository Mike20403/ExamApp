import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


const apiUrl = 'http://localhost:3001/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    let url = apiUrl;
    return this.httpClient.get(url);
  }
  
}
