import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/contato';
import { ContatoService } from '../service/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
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
export class ContatoComponent implements OnInit {

  contato = new Contato();

  constructor(private contatoService : ContatoService) { }

  ngOnInit(): void {


  }
saveContact(){


  this.contatoService.salvarContato(this.contato).subscribe(data => {
  this.novo();

  })

}

novo(){
  this.contato = new Contato();
}

}
