import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http: HttpClient) {

    console.log('conexion a spoty');
   }
}
