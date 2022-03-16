import { Component } from '@angular/core';
import { Contry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino : string  ='';
  errorExiste : boolean = false;
  paises  : Contry[]=[];

  constructor( private paisService: PaisService) { }

  buscar( termino:string){
    this.errorExiste=false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.burcarPais(termino).subscribe(paises=>{
      
      console.log(paises);
      this.paises=paises;

    },(error=>{
      //this.paises=paises;
      this.errorExiste=true;
      this.paises=[];
    }));

  }

  sugerencias(termino:string){
    this.errorExiste=false;
    //Crear sugerencia 
  }

}
