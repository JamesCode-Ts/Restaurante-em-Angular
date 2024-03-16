import { Component, ElementRef, Injectable, OnInit } from '@angular/core';
import { Reserva } from '../model/Reserva';
import { ReservaAdminService } from '../service-admin/reserva.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateParserFormatter, NgbDateStruct, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';



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
  styleUrls: ['../bower_components/bootstrap/dist/css/bootstrap.min.css',
  '../bower_components/Ionicons/css/ionicons.min.css',
  '../bower_components/font-awesome/css/font-awesome.min.css' ,
   '../dist/css/AdminLTE.min.css',
 '../dist/css/skins/skin-blue.min.css',
],
providers: [
  { provide: NgbDateAdapter, useClass: FormatDateAdapter },
  { provide: NgbDateAdapter, useClass: FormatDateAdapter }

]
})
export class ReservaAdminComponent implements OnInit {

  p: number = 1; 
  total!: number;
  nome! : String;
  reserva = new Reserva;
  reservas!: Reserva[]

  constructor(private reservaAdminService: ReservaAdminService,
  private router: Router, private routeActive: ActivatedRoute, private el: ElementRef ) { }

  ngOnInit() {

  this.reservaAdminService.buscarReserva().subscribe(data =>{

    this.reservas = data.content;
  })

  let id = this.routeActive.snapshot.paramMap.get('id')

  if (id != null){
    this.reservaAdminService.getReserva(id).subscribe(data =>{
      
      this.reserva = data;
    })

  }  


  }

  converterDatas() {
    let data: Date = new Date();
    this.reserva.dataDaCadastro = data.toLocaleDateString('pt-br');
  }

  saveReserva() {
    if(this.reserva.id != null && this.reserva.id.toString().trim != null){ /** Atualizando ou  Editando */
    this.converterDatas();
      this.reservaAdminService.updateReserva(this.reserva).subscribe(data =>{
        console.info(" Reserva Atualizado: " + data);
        this.novo();
        location.reload();
      });

    }else{

      this.reservaAdminService.salvarReserva(this.reserva).subscribe(data =>{ /**Salvando usuario */
      /** Adiciona o reserva na hora sem precisar da refresh */
      this.reservas.push(data);
      console.info(" Gravou Reserva " + data);
       
      });
    }
}




deletar(id: number, index: number){

  if (confirm('Deseja mesmo remover?')) {

  this.reservaAdminService.deletarReserva(id).subscribe(data => {

    this.reservas.splice(index, 1); /*Remover da tela*/ 

  })
}
}
carregarPagina(pagina: number) {

    this.reservaAdminService.getReservaListPage(pagina - 1).subscribe(data => {
      this.reservas = data.content;
      this.total = data.totalElements;
    });
}

novo(){
  this.reserva =  new Reserva;
}

public sair() {
  localStorage.clear();
  this.router.navigate(['admin/login']);
}

}
