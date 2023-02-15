import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/contato';
import { User } from '../model/User';
import { ContatoAdminService } from '../service-admin/contato.service';
import { LoginService } from '../service-admin/login.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['../bower_components/bootstrap/dist/css/bootstrap.min.css',
  '../bower_components/Ionicons/css/ionicons.min.css',
  '../bower_components/font-awesome/css/font-awesome.min.css' ,
   '../dist/css/AdminLTE.min.css',
 '../dist/css/skins/skin-blue.min.css',

],
})
export class EmailComponent implements OnInit {

  contatos!: Contato[]
  user = new User;

  contato = new Contato



  constructor(private contatoService: ContatoAdminService, private loginService: LoginService) { }

  ngOnInit(): void {

    this.loginService.usuarioLogado().subscribe(data=>{

      this.user.nome =  data.nome;

      this.user.photo = data.photo;

      
    })


    this.contatoService.buscarContato().subscribe(data =>{

      this.contatos = data.content;
  
      });
  }


  excluirContato(id: Number,  index: number){

    this.contatoService.deletarContato(id).subscribe(data =>{
     
      this.contatos.splice(index, 1); /*Remover da tela*/ 

    


    })
  }
  
}