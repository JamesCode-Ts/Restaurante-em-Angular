import { Component, OnInit } from '@angular/core';
import { Reserva } from '../model/Reserva';
import { ReservaAdminService } from '../service-admin/reserva.service';
import { DatePipe } from '@angular/common';
import { LoginService } from '../service-admin/login.service';
import { User } from '../model/User';
import { UserOnline } from '../model/userOnline';

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

  p: number = 1; 
  total!: number;
  user = new User()
  nome! : String;
  reserva = new Reserva;
  userOnline = new UserOnline;

  reservas!: Reserva[]

  constructor(private reservaAdminService: ReservaAdminService, private loginService : LoginService) { }

  ngOnInit() {

    
    this.loginService.usuarioLogado().subscribe(data=>{

      this.userOnline.nomeOn =  data.nome;
  
      this.userOnline.photoOn = data.photo;
  
      this.userOnline.loginOn = data.login;
     
       
     })
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

carregarPagina(pagina: number) {



    this.reservaAdminService.getReservaListPage(pagina - 1).subscribe(data => {
      this.reservas = data.content;
      this.total = data.totalElements;
    });
  

}

novo(){

  this.reserva =  new Reserva;
}

}
