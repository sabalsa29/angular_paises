import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contry } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiUrl: string = 'https://restcountries.com/v2';  


  constructor(private http: HttpClient) {
    
  }
  buscarCapital(termino: string):Observable<Contry[]>{
    const url =  ` ${this.apiUrl}/capital/${termino}`;

    return this.http.get<Contry[]>(url);
  }

}
