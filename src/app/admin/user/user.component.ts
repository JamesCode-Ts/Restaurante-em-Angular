import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { User } from '../model/User';
import { userService } from '../service-admin/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../bower_components/bootstrap/dist/css/bootstrap.min.css',
  '../bower_components/Ionicons/css/ionicons.min.css',
  '../bower_components/font-awesome/css/font-awesome.min.css' ,
   '../dist/css/AdminLTE.min.css',
 '../dist/css/skins/skin-blue.min.css',

],

})
export class UserComponent implements OnInit {

  user = new User;
 
  users!: User[];
  p: number = 1; 
  total!: number;
  nome!: string;
  quantDeId!: number ;
 
 

  constructor(private userService : userService, private routeActive: ActivatedRoute, private router: Router) { 

   
  }

/**
  ngOnInit() {

    if (localStorage.getItem('token') !== null) { // alterar pra ==
      this.router.navigate(['admin/login']);
    }

*/
this.userService.buscarUsuario().subscribe(data=>{

 this.users = data.content;
})


    let id = this.routeActive.snapshot.paramMap.get('id');

    if(id != null){
   
    this.userService.getUsuario(id).subscribe(data =>{
   
      this.user = data;
    

    })
    }
  }

 

  

  
  saveUser() {
   
    if(this.user.id != null && this.user.id.toString().trim != null){ /** Atualizando ou  Editando */

    this.userService.updateUsuario(this.user).subscribe(data =>{
        console.info(" User Atualizado: " + data);
        location.reload();
      //  this.users.push(data);
        this.novo();
    
      });

    }else{
      this.userService.salvarUsuario(this.user).subscribe(data =>{ /**Salvando usuario */
      
      /** Adiciona o user na hora sem precisar da refresh */
      this.users.push(data);
      
      


    
      console.info(" Gravou User " + data);
       
         
      });

      
    }
    
    
}

deleteUsuario(id: Number, index: number) {

  if (confirm('Deseja mesmo remover?')) {

    this.userService.deletarUsuario(id).subscribe(data => {
      //console.log("Retorno do método delete : " + data);

      this.users.splice(index, 1); /*Remover da tela*/ 
         
    
     
      // this.userService.getStudentList().subscribe(data => {
      //  this.students = data;
     // });

});
}
}

/*
carregarPagina(pagina: number) {


  if (this.nome !== '') {
    this.userService.consultarUserPoPage(this.nome, (pagina - 1)).subscribe(data => {
      this.users = data.content;
      this.total = data.totalElements;
    });
  }
  else {
    this.userService.getUserListPage(pagina - 1).subscribe(data => {
      this.users = data.content;
      this.total = data.totalElements;
    });
  }

}
*/

public sair() {
  localStorage.clear();
  this.router.navigate(['admin/login']);
}

  novo(){

    this.user = new User;
  }

}
function ngOnInit(): ((error: any) => void) | undefined {
  throw new Error('Function not implemented.');
}

