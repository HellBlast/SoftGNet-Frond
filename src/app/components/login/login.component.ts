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

  dato: any;

  usuario: Usuario={
    id: 0,
    nombre: '',
    alias: '',
    contrasena: ''
  }

  constructor(private softService: SoftService, private router: Router, private activedRoute: ActivatedRoute){}
  
  ValidarUsuario(){
    this.softService.validarUsuario(this.usuario.alias).subscribe(
      resp => {
        this.dato = resp;
        if(this.usuario.contrasena==this.dato.contraseña){
          this.router.navigate(['/list-vehicle']);
        }
      },
      err => console.error(err)
    );
  }

}
