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

  validarUsuario(alias: string){
    return this.http.get(`${this.API_URL}/usuario/${alias}`);
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

  updateVehicles(id: string, vehicle: Vehicles){
    return this.http.put(`${this.API_URL}/vehicles/${id}`, vehicle);
  }

  deleteVehicles(id: string){
    return this.http.delete(`${this.API_URL}/vehicles/${id}`);
  }

  getDrivers(){
    return this.http.get(`${this.API_URL}/drivers`);
  }

  getDriver(id: string){
    return this.http.get(`${this.API_URL}/drivers/${id}`);
  }

  postDrivers(drivers: Drivers){
    return this.http.post(`${this.API_URL}/drivers`, drivers);
  }

  updateDrivers(id: string, drivers: Drivers){
    return this.http.put(`${this.API_URL}/drivers/${id}`, drivers);
  }

  deleteDrivers(id: string){
    return this.http.delete(`${this.API_URL}/drivers/${id}`);
  }

  getRouters(){
    return this.http.get(`${this.API_URL}/router`);
  }

  getRouter(id: string){
    return this.http.get(`${this.API_URL}/router/${id}`);
  }

  postRouters(routers: Routers){
    return this.http.post(`${this.API_URL}/router`, routers);
  }

  updateRouters(id: string, routers: Routers){
    return this.http.put(`${this.API_URL}/router/${id}`, routers);
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
