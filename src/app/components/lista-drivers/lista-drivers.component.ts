import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Drivers } from 'src/app/models/Drivers';
import { SoftService } from 'src/app/services/soft.service';

@Component({
  selector: 'app-lista-drivers',
  templateUrl: './lista-drivers.component.html',
  styleUrls: ['./lista-drivers.component.css']
})
export class ListaDriversComponent {

  list: any;
  drivers: any;

  driver: Drivers={
    id: 0,
    last_name: '',
    first_name: '',
    ssd: '',
    dob: new Date(),
    address: '',
    city: '',
    zip: '',
    phone: 0,
    active: 0

  }

  constructor(private softService: SoftService, private router: Router){}

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    this.softService.getDrivers().subscribe(
      resp => {
        this.list = resp;
        this.drivers = this.list.data;
        console.log(this.drivers);
      },
      err => console.error(err)
    );
  }

  guardarDrivers() {
    this.softService.postDrivers(this.driver)
    .subscribe(
      res=>{
        this.getGames();
      },
      err => console.log(err)
    );
  }

  eliminarDrivers(id: string){
    this.softService.deleteDrivers(id).subscribe(
      res => {
        this.getGames();
      },
      err => console.log(err)
    )
  }

}
