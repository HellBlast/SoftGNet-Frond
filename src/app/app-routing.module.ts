import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDriversComponent } from './components/lista-drivers/lista-drivers.component';
import { ListaRoutersComponent } from './components/lista-routers/lista-routers.component';
import { ListaSchedulesComponent } from './components/lista-schedules/lista-schedules.component';
import { ListaVehiclesComponent } from './components/lista-vehicles/lista-vehicles.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'registrar', component:RegistrarComponent},
  {path:'list-vehicle', component:ListaVehiclesComponent},
  {path:'list-routers', component:ListaRoutersComponent},
  {path:'list-drivers', component:ListaDriversComponent},
  {path:'list-schedules', component:ListaSchedulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
