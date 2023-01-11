import { Component, OnInit } from '@angular/core';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { ContatoComponent } from 'src/app/contato/contato.component';
import { ContatoAdminComponent } from '../contato/contato.component';
import { Contato } from '../model/contato';
import { Menu } from '../model/Menu';
import { User } from '../model/User';
import { ContatoAdminService } from '../service-admin/contato.service';
import { menuAdminService } from '../service-admin/menu.service';
import { userService } from '../service-admin/user.service';

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

contato = new Contato

 

  constructor(private userService : userService, private menuService : menuAdminService, private contatoAdminService : ContatoAdminService) { }

  ngOnInit(){

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




})

  }


}