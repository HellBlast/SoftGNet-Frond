import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SoftService } from 'src/app/services/soft.service';

@Component({
  selector: 'app-lista-drivers',
  templateUrl: './lista-drivers.component.html',
  styleUrls: ['./lista-drivers.component.css']
})
export class ListaDriversComponent {

  list: any;
  drivers: any;

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

}
