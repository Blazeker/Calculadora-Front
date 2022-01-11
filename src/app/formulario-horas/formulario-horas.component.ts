import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Calculo } from '../calculo';
import { Horas } from '../horas';
import { HorasService } from '../horas.service';

@Component({
  selector: 'app-formulario-horas',
  templateUrl: './formulario-horas.component.html',
  styleUrls: ['./formulario-horas.component.css']
})
export class FormularioHorasComponent implements OnInit {


  formulario: Calculo = new Calculo;
  public hora: Horas = new Horas;

  constructor(private router: Router, private horasService: HorasService) { }

  ngOnInit(): void {
  }


  consultarTecnico()
  {
  
  this.horasService.mostrarResumen(this.formulario.idTecnico, this.formulario.semana).subscribe(((data: any) =>{
    if(data.horas == null)
    {
      alert("Por favor escriba una semana entre 1 y 53");
    }
    else
    {
    this.hora.idTecnico = this.formulario.idTecnico;
    this.hora.horasNormales = data.horas.horasNormales;
    this.hora.horasNocturnas = data.horas.horasNocturnas;
    this.hora.horasDominicales = data.horas.horasDominicales;
    this.hora.horasNormalesExtra = data.horas.horasNormalesExtra;
    this.hora.horasNocturnasExtra = data.horas.horasNocturnasExtra;
    this.hora.horasDominicalesExtra = data.horas.horasDominicalesExtra;
    this.hora.horasTotales = data.horas.horasTotales;
    }

  }));

  
} 
}
