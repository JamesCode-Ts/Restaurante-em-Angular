import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/contato';
import { ContatoAdminService } from '../service-admin/contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['../bower_components/bootstrap/dist/css/bootstrap.min.css',
  '../bower_components/Ionicons/css/ionicons.min.css',
  '../bower_components/font-awesome/css/font-awesome.min.css' ,
   '../dist/css/AdminLTE.min.css',
 '../dist/css/skins/skin-blue.min.css',

],
})
export class ContatoAdminComponent implements OnInit {

  contatos!: Contato[]

  contato = new Contato

  constructor(private contatoService : ContatoAdminService, private router : Router) { }

  ngOnInit() {


    this.contatoService.buscarContato().subscribe(data =>{

    this.contatos = data.content;

    });

  }
    excluirContato(id: Number,  index: number){

      this.contatoService.deletarContato(id).subscribe(data =>{
       
        this.contatos.splice(index, 1); /*Remover da tela*/ 

      


      })
    }
    
    public sair() {
      localStorage.clear();
         this.router.navigate(['admin/login']);
    }
    
}



