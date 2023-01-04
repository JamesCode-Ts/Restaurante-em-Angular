import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { FormsModule,  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import { MenuComponent } from './menu/menu.component';
import {  NavMenuComponent } from './inc/nav-menu';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';
import { ReservaComponent } from './reserva/reserva.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { UserComponent } from './admin/user/user.component';






export const appRouters: Routes = [

  {path : 'home', component : HomeComponent},
  {path : 'menu', component : MenuComponent},
  {path : 'servicos', component : ServicosComponent},
  {path : 'contato', component : ContatoComponent},
  {path : 'reserva', component : ReservaComponent},
  {path : 'login', component : LoginComponent},
  {path : 'admin/user', component : UserComponent},
 


];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

export const optionsMask : Partial<IConfig> | (() => Partial<IConfig>) = {}; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NavMenuComponent,
    ServicosComponent,
    ContatoComponent,
    ReservaComponent,
    AdminComponent,
    LoginComponent,
     UserComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    NgbModule,
    NgxMaskModule.forRoot(optionsMask),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
