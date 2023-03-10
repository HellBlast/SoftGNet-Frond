import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { SoftService } from 'src/app/services/soft.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: Usuario={
    id: 0,
    nombre: '',
    alias: '',
    contrasena: ''
  }

  constructor(private softService: SoftService, private router: Router, private activedRoute: ActivatedRoute){}
  
  ValidarUsuario(){
    this.softService.saveRegistro(this.usuario)
    .subscribe(
      res=>{
        this.router.navigate(['/list-vehicle'])
      },
      err => alert('Usuario Erroneo')
    )
  }

}
