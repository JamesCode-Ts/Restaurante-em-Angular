import { Component, OnInit } from '@angular/core';
import { User } from '../admin/model/User';
import { LoginService } from '../admin/service-admin/login.service';
import { Menu } from '../model/Menu';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../css/animate.css',
  '../css/bootstrap-datetimepicker.min.css',
  '../css/bootstrap-datepicker.min.css',
  '../css/bootstrap.css', 
  '../css/flexslider.css',
  '../css/icomoon.css',
  '../css/magnific-popup.css', //'./css/owl.carousel.min.css',
  '../css/owl.theme.default.min.css',
  '../css/style.css',
  '../css/themify-icons.css' ]
})
export class MenuComponent implements OnInit {

  menus!: Menu[];
  user = new User;
 

  constructor(private menuServive: MenuService,  private loginService : LoginService) { 

    
  }


  ngOnInit() {

    this.loginService.usuarioLogado().subscribe(data=>{

      this.user.nome =  data.nome;

      this.user.photo = data.photo;
    
    })

  
  

 
    this.menuServive.buscarMenu().subscribe(data => {
      this.menus = data.content;
    })

   
  
  }
}
