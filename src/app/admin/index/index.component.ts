import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Contato } from '../model/contato';
import { Menu } from '../model/Menu';
import { User } from '../model/User';
import { ContatoAdminService } from '../service-admin/contato.service';
import { menuAdminService } from '../service-admin/menu.service';
import { userService } from '../service-admin/user.service';
import { ReservaAdminService } from '../service-admin/reserva.service';
import { Reserva } from '../model/Reserva';
import { LoginService } from '../service-admin/login.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../bower_components/bootstrap/dist/css/bootstrap.min.css',
  '../bower_components/Ionicons/css/ionicons.min.css',
  '../bower_components/font-awesome/css/font-awesome.min.css' ,
   '../dist/css/AdminLTE.min.css',
 '../dist/css/skins/skin-blue.min.css',

],
})
export class IndexComponent implements OnInit {



menu = new Menu
users!: User[];
user = new User()
contato = new Contato;
reserva = new Reserva;


 

  constructor(private userService : userService, private menuService : menuAdminService,
    private reservaAdminService : ReservaAdminService,
     private contatoAdminService : ContatoAdminService, private router: Router
     , private loginService : LoginService) { }

  ngOnInit(){

    this.loginService.usuarioLogado().subscribe(data=>{

      this.user.nome =  data.nome;

      this.user.photo = data.photo;

      
    })

    this.userService.getQntDeUser().subscribe(data => {
      
      this.user.quantDeUser = data;
    
      console.log(this.user.quantDeUser);



     
    });

    this.menuService.getQntDeMenu().subscribe(data => {
      
      this.menu.quantDeMenu = data;
    
      console.log(this.menu.quantDeMenu);

  });

  this.contatoAdminService.getQntDeContato().subscribe(data =>{

    this.contato.quantDeContato = data;

});

this.reservaAdminService.getQntDeReservar().subscribe(data=>{

  this.reserva.quantDeReserva = data;
})

  }

  public sair() {
    localStorage.clear();
       this.router.navigate(['admin/login']);
  }


}