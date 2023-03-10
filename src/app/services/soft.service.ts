import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class SoftService {

  API_URL = 'http://127.0.0.1:8000/api';

  constructor(private http:HttpClient) { }

  saveRegistro(usuario: Usuario){
    return this.http.post(`${this.API_URL}/usuario`,usuario);
  }

  validaUsuario(usuario: Usuario){
    return this.http.get(`${this.API_URL}/usuario`);
  }

  getVehicles(){
    return this.http.get(`${this.API_URL}/vehicles`);
  }

  getDrivers(){
    return this.http.get(`${this.API_URL}/drivers`);
  }

}
