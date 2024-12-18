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
import { LoginComponent } from './admin/login/login.component';
import { UserComponent } from './admin/user/user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenuAdminComponent } from './admin/menu/menu.component';
import { IndexComponent } from './admin/index/index.component';
import { ContatoAdminComponent } from './admin/contato/contato.component';
import { ReservaAdminComponent } from './admin/reserva/reserva.component';
import { NavMenuAdmin } from './admin/inc/nav-menuAdmin';
import { GuardiaoGuard } from './admin/service-admin/guardiao.guard';
import { EmailComponent } from './admin/email/email.component';


export const appRouters: Routes = [

  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'menu', component : MenuComponent, },
  {path : 'servicos', component : ServicosComponent},
  {path : 'contato', component : ContatoComponent},
  {path : 'reserva', component : ReservaComponent},
  {path : 'admin/login', component : LoginComponent},
  
  {path : 'admin/user', component : UserComponent},
  {path : 'admin/user/:id', component : UserComponent},
  {path : 'admin/menu', component : MenuAdminComponent},
  {path : 'admin/menu/:id', component : MenuAdminComponent},
  {path : 'admin/index', component : IndexComponent},
  {path : 'admin/contatos', component : ContatoAdminComponent},
  {path : 'admin/reservas', component : ReservaAdminComponent},
  {path : 'admin/reservas/:id', component : ReservaAdminComponent},
  {path : 'admin/emails', component : EmailComponent}



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
    LoginComponent,
    UserComponent,
     MenuAdminComponent,
     IndexComponent,
     ContatoAdminComponent,
     ReservaAdminComponent,
     NavMenuAdmin,
     EmailComponent,

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    NgbModule,
    NgxMaskModule.forRoot(optionsMask),
    NgxPaginationModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
