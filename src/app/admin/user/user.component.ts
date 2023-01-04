import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { User } from '../model/User';
import { userService } from '../service-admin/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../bower_components/bootstrap/dist/css/bootstrap.min.css',
  '../bower_components/Ionicons/css/ionicons.min.css',
  '../bower_components/font-awesome/css/font-awesome.min.css' ,
   '../dist/css/AdminLTE.min.css',
 '../dist/css/skins/skin-blue.min.css',

],

})
export class UserComponent implements OnInit {

  user = new User;

  constructor(private userService : userService) { }

  ngOnInit(): void {


  }
saveUser(){


  this.userService.salvarContato(this.user).subscribe(data => {
  this.novo();
  
    
  

  })}


  novo(){

    this.user = new User;
  }

}
