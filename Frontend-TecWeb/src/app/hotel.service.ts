import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Globals } from './globals/globals';
import { Hotel } from './hotel/hotel.component';

@Injectable({
  providedIn: 'root'
})
export class HotelService {


  constructor(private http: HttpClient, private globals: Globals) { }

  getHoteis(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>("http://localhost:3000/hotel", this.header());

  }

  getHotel(hotelId: number): Observable<Hotel> {
    return this.http.get<Hotel>("http://localhost:3000/hotel/" + hotelId, this.header());
  }

  adicionar(hotel: Hotel): Observable<any> {
    return this.http.post("http://localhost:3000/hotel", hotel, this.header());
  }

  editar(hotel: Hotel): Observable<any> {
    return this.http.put("http://localhost:3000/hotel/" + hotel.id, hotel, this.header());

  }

  remover(hotelId : number): Observable<any> {
    return this.http.delete("http://localhost:3000/hotel/" + hotelId);
  }

  header(){
    return{ 
      headers: new HttpHeaders({'Content-Type':'application/json',
      'x-access-token':this.globals.loginData.token
      })
    };

  }
}

