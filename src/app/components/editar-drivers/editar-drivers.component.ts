import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drivers } from 'src/app/models/Drivers';
import { SoftService } from 'src/app/services/soft.service';

@Component({
  selector: 'app-editar-drivers',
  templateUrl: './editar-drivers.component.html',
  styleUrls: ['./editar-drivers.component.css']
})
export class EditarDriversComponent {
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

  constructor(private softService: SoftService, private router: Router, private activedrouter: ActivatedRoute) { }

  ngOnInit() {
    let id = '' + this.activedrouter.snapshot.paramMap.get('id');//get id

    this.softService.getDriver(id).subscribe(
      resp => {
        this.list = resp;
        this.driver = this.list;
        console.log(resp);
      },
      err => console.error(err)
    );

  }

  ActualizarDrivers(){

    let id = ''+this.driver.id;

    this.softService.updateDrivers(id, this.driver)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-drivers'])

      },
      err => console.log(err)
    )
  }

}
