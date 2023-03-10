import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { SoftService } from 'src/app/services/soft.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  usuario: Usuario={
    id: 0,
    nombre: '',
    alias: '',
    contrasena: ''
  }

  constructor(private softService: SoftService, private router: Router, private activedRoute: ActivatedRoute){}

  saveNewUsuario(){
    this.softService.saveRegistro(this.usuario)
    .subscribe(
      res=>{
        this.router.navigate(['/login'])
      },
      err => console.log(err)
    )
  }
  

}
