import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Schedules } from 'src/app/models/Schedules';
import { SoftService } from 'src/app/services/soft.service';

@Component({
  selector: 'app-lista-schedules',
  templateUrl: './lista-schedules.component.html',
  styleUrls: ['./lista-schedules.component.css']
})
export class ListaSchedulesComponent {
  list: any;
  schedule: any;
  
  schedules: Schedules={
    id: 0,
    router_id: 0,
    week_num: 0,
    from: new Date(),
    to: new Date(),
    active: 0
  }

  constructor(private softService: SoftService, private router: Router){}

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    this.softService.getSchedules().subscribe(
      resp => {
        this.list = resp;
        this.schedule = this.list.data;
        console.log(this.schedule);
      },
      err => console.error(err)
    );
  }

  guardarSchedules() {
    this.softService.postSchedules(this.schedules)
    .subscribe(
      res=>{
        this.getGames();
      },
      err => console.log(err)
    );
  }

  eliminarSchedules(id: string){
    this.softService.deleteSchedules(id).subscribe(
      res => {
        this.getGames();
      },
      err => console.log(err)
    )
  }
}
