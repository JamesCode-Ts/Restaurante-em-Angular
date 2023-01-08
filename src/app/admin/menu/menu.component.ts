import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../model/Menu';
import { menuAdminService } from '../service-admin/menu.service';

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

  menu = new Menu;

  menus!: Menu[];



  constructor(private menuAdminService : menuAdminService, private routeActive: ActivatedRoute) { }

  ngOnInit() {

    this.menuAdminService.buscarMenu().subscribe(data =>{

      this.menus = data.content;
  
      })

      let id = this.routeActive.snapshot.paramMap.get('id')

      if (id != null){

        this.menuAdminService.getMenu(id).subscribe(data =>{

          this.menu = data;
        })


      }
}




  saveMenu() {
   
    if(this.menu.id != null && this.menu.id.toString().trim != null){ /** Atualizando ou  Editando */
      this.menuAdminService.updateMenu(this.menu).subscribe(data =>{
        console.info(" User Atualizado: " + data);
        this.novo();
        location.reload();
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

    this.menu = new Menu;
   }
  }


