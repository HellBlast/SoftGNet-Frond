import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../models/Usuario';
import { Vehicles } from '../models/Vehicles';
import { Drivers } from '../models/Drivers';
import { Routers } from '../models/Routers';
import { Schedules } from '../models/Schedules';

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

  getVehicle(id: string){
    return this.http.get(`${this.API_URL}/vehicles/${id}`);
  }

  postVehicles(vehicle: Vehicles){
    return this.http.post(`${this.API_URL}/vehicles`, vehicle);
  }

  deleteVehicles(id: string){
    return this.http.delete(`${this.API_URL}/vehicles/${id}`);
  }

  getDrivers(){
    return this.http.get(`${this.API_URL}/drivers`);
  }

  postDrivers(drivers: Drivers){
    return this.http.post(`${this.API_URL}/drivers`, drivers);
  }

  deleteDrivers(id: string){
    return this.http.delete(`${this.API_URL}/drivers/${id}`);
  }

  getRouters(){
    return this.http.get(`${this.API_URL}/router`);
  }

  postRouters(routers: Routers){
    return this.http.post(`${this.API_URL}/router`, routers);
  }

  deleteRouters(id: string){
    return this.http.delete(`${this.API_URL}/router/${id}`);
  }

  getSchedules(){
    return this.http.get(`${this.API_URL}/schedules`);
  }

  postSchedules(schedules: Schedules){
    return this.http.post(`${this.API_URL}/schedules`, schedules);
  }

  deleteSchedules(id: string){
    return this.http.delete(`${this.API_URL}/schedules/${id}`);
  }

}
