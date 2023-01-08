import { Component, OnInit } from '@angular/core';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Menu } from '../model/Menu';
import { User } from '../model/User';
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

 

  constructor(private userService : userService, private menuService : menuAdminService) { }

  ngOnInit(){

    this.userService.getQntDeUser().subscribe(data => {
      
      this.user.quantDeUser = data;
    
      console.log(this.user.quantDeUser);

     
    });

    this.menuService.getQntDeMenu().subscribe(data => {
      
      this.menu.quantDeMenu = data;
    
      console.log(this.menu.quantDeMenu);

  });

}


}