import { Component, Injectable, OnInit } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from '../model/Reserva';
import { ReservaService } from '../service/reserva.service';
import * as moment from 'moment';



@Injectable()
export class FormatDateAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '/';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }


  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }


}




@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['../css/animate.css',
  '../css/bootstrap-datetimepicker.min.css',
  '../css/bootstrap-datepicker.min.css',
  '../css/bootstrap.css', 
  '../css/flexslider.css',
  '../css/icomoon.css',
  '../css/magnific-popup.css', //'./css/owl.carousel.min.css',
  '../css/owl.theme.default.min.css',
  '../css/style.css',
  '../css/themify-icons.css' ],
    providers: [
    { provide: NgbDateAdapter, useClass: FormatDateAdapter },
    { provide: NgbDateAdapter, useClass: FormatDateAdapter }

  ]
})


export class ReservaComponent implements OnInit {


  reserva =  new Reserva();
  mensagem: boolean = false;


  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {

  }

  converterDatas() {
    let data: Date = new Date();
    this.reserva.dataDaCadastro = data.toLocaleDateString('pt-br');
  }


  saveReserve(){
     this.converterDatas();
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
