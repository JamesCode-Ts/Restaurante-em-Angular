import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { User } from '../model/User';
import { LoginService } from '../service-admin/login.service';
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
 
 

  constructor(private userService : userService,
     private loginService : LoginService, private routeActive: ActivatedRoute, private router: Router) { 

   
  }


  ngOnInit() {


      this.loginService.usuarioLogado().subscribe(data=>{

        this.user.nome =  data.nome;

        this.user.photo = data.photo;

        
      })
    

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

imageShow: any = '';
    onChange(event: any){



        if (event.target.files && event.target.files[0]) {
      
            
         
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            
            reader.onload = () => {
            
              this.imageShow = reader.result;


              this.user.photo = this.imageShow;
              /** Utiliza o salvamento de photo para a mesma instancia de objeto,
               * não precisando usar o ngModel no input no html.
               */
              this.userService.salvarUsuario(this.user).subscribe(data =>{

                console.log("photo salva!",data);

               
              })
              }
        
            
           //   this.menu.photo = base64data;
           

            }
        

}
  novo(){

    this.user = new User;
  }

}
function ngOnInit(): ((error: any) => void) | undefined {
  throw new Error('Function not implemented.');
}

