import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { SoftService } from './services/soft.service';
import { ListaVehiclesComponent } from './components/lista-vehicles/lista-vehicles.component';
import { ListaSchedulesComponent } from './components/lista-schedules/lista-schedules.component';
import { ListaDriversComponent } from './components/lista-drivers/lista-drivers.component';
import { ListaRoutersComponent } from './components/lista-routers/lista-routers.component';
import { NavigateComponent } from './components/navigate/navigate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    ListaVehiclesComponent,
    ListaSchedulesComponent,
    ListaDriversComponent,
    ListaRoutersComponent,
    NavigateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SoftService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
