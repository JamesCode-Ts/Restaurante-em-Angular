import { Component, OnInit } from '@angular/core';
import { Reserva } from '../model/Reserva';
import { ReservaAdminService } from '../service-admin/reserva.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['../bower_components/bootstrap/dist/css/bootstrap.min.css',
  '../bower_components/Ionicons/css/ionicons.min.css',
  '../bower_components/font-awesome/css/font-awesome.min.css' ,
   '../dist/css/AdminLTE.min.css',
 '../dist/css/skins/skin-blue.min.css',

],
})
export class ReservaAdminComponent implements OnInit {

 
 

  reserva = new Reserva;

  reservas!: Reserva[]

  constructor(private reservaAdminService: ReservaAdminService) { }

  ngOnInit() {

  this.reservaAdminService.buscarReserva().subscribe(data =>{

    this.reservas = data.content;
  })
  }

  converterDatas() {
    let data: Date = new Date();
    this.reserva.dataDaCadastro = data.toLocaleDateString('pt-br');
  }

  
  saveReserva() {
   
    if(this.reserva.id != null && this.reserva.id.toString().trim != null){ /** Atualizando ou  Editando */
      this.reservaAdminService.updateReserva(this.reserva).subscribe(data =>{
        console.info(" User Atualizado: " + data);
        this.novo();
        location.reload();
      });

    }else{

      this.converterDatas();
      this.reservaAdminService.salvarReserva(this.reserva).subscribe(data =>{ /**Salvando usuario */
      
      /** Adiciona o reserva na hora sem precisar da refresh */
      this.reservas.push(data);
      
    
      console.info(" Gravou User " + data);
       
         
      });

      
    }
    
}

novo(){

  this.reserva =  new Reserva;
}

}
