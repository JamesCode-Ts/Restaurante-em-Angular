import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../model/Menu';
import { menuAdminService } from '../service-admin/menu.service';
import * as _ from 'lodash';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { LoginService } from '../service-admin/login.service';
import { User } from '../model/User';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../bower_components/bootstrap/dist/css/bootstrap.min.css',
  '../bower_components/Ionicons/css/ionicons.min.css',
  '../bower_components/font-awesome/css/font-awesome.min.css' ,
   '../dist/css/AdminLTE.min.css',
 '../dist/css/skins/skin-blue.min.css',

],
})
export class MenuAdminComponent implements OnInit {

  imageError!: string;
  isImageSaved!: boolean;
  cardImageBase64!: string;
  user = new User()
  base64data!:string;

  menu = new Menu;

  menus!: Menu[];


  



  constructor(private menuAdminService : menuAdminService, private routeActive: ActivatedRoute,
     private router: Router, private loginService : LoginService){


   
  }
  ngOnInit() {
    //alert('entrou');
    this.loginService.usuarioLogado();
    console.log("Teste");
    this.menuAdminService.buscarMenu().subscribe(data =>{

      this.menus = data.content;
  
      })

      let id = this.routeActive.snapshot.paramMap.get('id')

      if (id != null){

        this.menuAdminService.getMenu(id).subscribe(data =>{

          this.menu = data;
        })


      }
      
      this.loginService.usuarioLogado().subscribe(data=>{

        this.user.nome =  data.nome;

        
      })

      
}


 
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


              this.menu.photo = this.imageShow;
              /** Utiliza o salvamento de photo para a mesma instancia de objeto,
               * não precisando usar o ngModel no input no html.
               */
              this.menuAdminService.salvarMenu(this.menu).subscribe(data =>{

                console.log("photo salva!",data);

               
              })
              }
        
            
           //   this.menu.photo = base64data;
           

            }
         
            
            
          
            

     


}

cancelar(){

  this.router.navigate(['admin/menu']);    
}
  saveMenu() {
   
    if(this.menu.id != null && this.menu.id.toString().trim != null){ /** Atualizando ou  Editando */
      this.menuAdminService.updateMenu(this.menu).subscribe(data =>{
        console.info(" User Atualizado: " + data);
            
      
     //   this.router.navigate(['admin/menu']);   
    //    location.reload();
        this.novo();
       
      });

    }else{
      
      this.menuAdminService.salvarMenu(this.menu).subscribe(data =>{ /**Salvando usuario */

      
      
     
     this.menus.push(data);
   
    
      console.info(" Gravou User " + data);
       
         
      });

      
  

   
    

      
    }
    
    
}

  deleteMenu(id: number, index: number){

    if (confirm('Deseja mesmo remover?')) {

    this.menuAdminService.deletarMenu(id).subscribe(data => {

      this.menus.splice(index, 1); /*Remover da tela*/ 

    })
  }
  }

 /*  ListarMenu(){

   this.menuAdminService.buscarMenu().subscribe(data =>{

    this.menus = data;


   })

   }

   */


   novo(){
    this.loginService.usuarioLogado();
    this.menu = new Menu;
   }
  }


