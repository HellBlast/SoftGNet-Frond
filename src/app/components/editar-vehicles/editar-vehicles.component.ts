import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicles } from 'src/app/models/Vehicles';
import { SoftService } from 'src/app/services/soft.service';

@Component({
  selector: 'app-editar-vehicles',
  templateUrl: './editar-vehicles.component.html',
  styleUrls: ['./editar-vehicles.component.css']
})
export class EditarVehiclesComponent {

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

  constructor(private softService: SoftService, private router: Router, private activedrouter: ActivatedRoute) { }

  ngOnInit() {
    let id = '' + this.activedrouter.snapshot.paramMap.get('id');//get id

    this.softService.getVehicle(id).subscribe(
      resp => {
        this.list = resp;
        this.vehicles = this.list;
        console.log(resp);
      },
      err => console.error(err)
    );

  }

  ActualizarVehicles(){

    let id = ''+this.vehicles.id;

    this.softService.updateVehicles(id, this.vehicles)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-vehicle'])

      },
      err => console.log(err)
    )
  }
}


