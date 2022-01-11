import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnicos } from '../tecnicos';
import { TecnicosService } from '../tecnicos.service';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.css']
})
export class TecnicosComponent implements OnInit {
  tecnicos: Tecnicos;

  constructor(private readonly router: Router, private readonly tecnicosService: TecnicosService) { }

  ngOnInit() {
  }

  GuardarCuenta(): void {
    this.tecnicosService.createReporte(this.tecnicos).subscribe((data: Tecnicos) => {
      if (data == null) {
        alert("Los datos del tecnico " + this.tecnicos.idTecnico + " no puedieron ser agregados");
      }
      else {
        alert("Se agrego con exito los datos del tecnico " + this.tecnicos.idTecnico);
      }
    })
  }
}
