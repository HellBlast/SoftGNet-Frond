import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Routers } from 'src/app/models/Routers';
import { SoftService } from 'src/app/services/soft.service';

@Component({
  selector: 'app-editar-routers',
  templateUrl: './editar-routers.component.html',
  styleUrls: ['./editar-routers.component.css']
})
export class EditarRoutersComponent {
  list: any;
  route: any;
  
  routers: Routers={
    id: 0,
    description: '',
    driver_id: 0,
    vehicle_id: 0,
    active: 0
  }

  constructor(private softService: SoftService, private router: Router, private activedrouter: ActivatedRoute) { }

  ngOnInit() {
    let id = '' + this.activedrouter.snapshot.paramMap.get('id');//get id

    this.softService.getRouter(id).subscribe(
      resp => {
        this.list = resp;
        this.routers = this.list;
        console.log(resp);
      },
      err => console.error(err)
    );

  }
  ActualizarRouters(){

    let id = ''+this.routers.id;
    console.log(this.routers);
    this.softService.updateRouters(id, this.routers)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-routers'])

      },
      err => console.log(err)
    )
  }
}

