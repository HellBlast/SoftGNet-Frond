import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicles } from 'src/app/models/Vehicles';
import { SoftService } from 'src/app/services/soft.service';

@Component({
  selector: 'app-lista-vehicles',
  templateUrl: './lista-vehicles.component.html',
  styleUrls: ['./lista-vehicles.component.css']
})
export class ListaVehiclesComponent {

  list: any;
  vehicle: any;

  vehicles: Vehicles = {
    id: 0,
    description: '',
    year: 0,
    make: 0,
    capacity: 0,
    active: 0
  }

  constructor(private softService: SoftService, private router: Router) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.softService.getVehicles().subscribe(
      resp => {
        this.list = resp;
        this.vehicle = this.list.data;
        console.log(this.vehicle);
      },
      err => console.error(err)
    );
  }

  guardarVehicles() {
    this.softService.postVehicles(this.vehicles)
    .subscribe(
      res=>{
        this.getGames();
      },
      err => console.log(err)
    );
  }

  eliminarvehicles(id: string){
    this.softService.deleteVehicles(id).subscribe(
      res => {
        this.getGames();
      },
      err => console.log(err)
    )
  }

}
