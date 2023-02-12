import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { User } from '../model/User';
import { LoginService } from '../service-admin/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../bower_components/bootstrap/dist/css/bootstrap.min.css',
  '../bower_components/Ionicons/css/ionicons.min.css',
  '../bower_components/font-awesome/css/font-awesome.min.css' ,
   '../dist/css/AdminLTE.css',
 '../dist/css/skins/skin-blue.min.css',

],

})


export class LoginComponent implements OnInit {

  user = new User()


  usuario = {login: '', senha: ''};

  

  constructor(private loginService: LoginService, private router : Router){}



  public login() {
    this.loginService.login(this.usuario);
 

  
  }

  public recuperar(){
    this.loginService.recuperar(this.usuario.login)
  }

  ngOnInit() {
    
   
    if(localStorage.getItem('token') !== null && 
    localStorage.getItem('token')!.toString().trim() !== null ){
    
  

    this.router.navigate(['admin/index']);

    }
    {

    }
  }
}
