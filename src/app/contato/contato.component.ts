import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/contato';
import { ContatoService } from '../service/contato.service';
import { Router } from '@angular/router';

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

  constructor(private contatoService : ContatoService, private router: Router) { }

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

public sair() {
  localStorage.clear();
  this.router.navigate(['admin/login']);
}

}
