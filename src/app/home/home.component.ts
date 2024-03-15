import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from '../model/Reserva';
import { Menu } from '../model/Menu'
import { ReservaService } from '../service/reserva.service';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../css/animate.css',
  '../css/bootstrap-datetimepicker.min.css',
  '../css/bootstrap-datepicker.min.css',
  '../css/bootstrap.css', 
  '../css/flexslider.css',
  '../css/icomoon.css',
  '../css/magnific-popup.css', //'./css/owl.carousel.min.css',
  '../css/owl.theme.default.min.css',
  '../css/style.css',
  '../css/themify-icons.css' 
]
})

/** O home tem as funções de cadastrar a reseva e menus,
 * Com isso estas funções vai ser implementadas neste component.
 */
export class HomeComponent implements OnInit {

  menus!: Menu[];
  reserva =  new Reserva();
  mensagem: boolean = false;

  constructor(private reservaService: ReservaService, private menuServive: MenuService ) { 
  }

  ngOnInit() {

    this.menuServive.buscarMenu().subscribe(data => {
      this.menus = data.content;
    });
  }

  saveReserve(){

    this.reservaService.salvarReserva(this.reserva).subscribe(data =>{
    this.reserva = data;
    this.novo();

    this.mensagem = true

    // Defina um tempo de exibição (por exemplo, 5 segundos)
    setTimeout(() => {
     this.mensagem = false;
   }, 5000); // Tempo em milissegundos
       console.info(" Gravou reserva " + data);
  

    })
      
  }
 
novo(){

  this.reserva = new Reserva();
}

}
