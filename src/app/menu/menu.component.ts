import { Component, OnInit } from '@angular/core';
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
 

  constructor(private menuServive: MenuService ) { 

    
  }


  ngOnInit() {

    
    this.menuServive.buscarMenu().subscribe(data => {
      this.menus = data.content;
    });

  
  }
}
