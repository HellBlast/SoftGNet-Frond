import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routers } from 'src/app/models/Routers';
import { SoftService } from 'src/app/services/soft.service';

@Component({
  selector: 'app-lista-routers',
  templateUrl: './lista-routers.component.html',
  styleUrls: ['./lista-routers.component.css']
})
export class ListaRoutersComponent {

  list: any;
  route: any;
  
  routers: Routers={
    id: 0,
    description: '',
    driver_id: 0,
    vehicle_id: 0,
    active: 0
  }

  constructor(private softService: SoftService, private router: Router){}

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    this.softService.getRouters().subscribe(
      resp => {
        this.list = resp;
        this.route = this.list.data;
        console.log(this.route);
      },
      err => console.error(err)
    );
  }

  guardarRouter() {
    this.softService.postRouters(this.routers)
    .subscribe(
      res=>{
        this.getGames();
      },
      err => console.log(err)
    );
  }

  eliminarRouter(id: string){
    this.softService.deleteRouters(id).subscribe(
      res => {
        this.getGames();
      },
      err => console.log(err)
    )
  }

}
