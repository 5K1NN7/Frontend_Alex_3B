import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl=environment.urlServidor
  private http=inject(HttpClient)

  // constructor(private http: HttClient) { }

  constructor(){}
  loginConNest(credencailes: any){
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credenciales);
  }

  registroConNest(datos: any){
    return this.http.get<any>(`${this.baseUrl}/register`, datos);
  }
}
