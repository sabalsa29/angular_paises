import { Component } from '@angular/core';
import { Contry } from '../../interfaces/pais.interface';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino : string  ='';
  errorExiste : boolean = false;
  paises  : Contry[]=[];

  constructor( private CapitalService: CapitalService) { }

  buscar( termino:string){
    this.errorExiste=false;
    this.termino = termino;
    console.log(this.termino);
    this.CapitalService.buscarCapital(termino).subscribe(paises=>{
      
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
