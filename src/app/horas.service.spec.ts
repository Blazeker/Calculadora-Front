import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { HorasService } from './horas.service';

fdescribe('HorasService', () => {
  let service: HorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
    });
    service = TestBed.inject(HorasService);


  });

  it('Retorna el resumen de horas de la consulta del tecnico Santiago en la semana 3', (done: DoneFn) => {
    const mostrarHoras = { idTecnico: 'Santiago', horasTotales: 69, horasNormales: 35, horasNocturnas: 12, horasDominicales: 0, horasNormalesExtra: 4, horasNocturnasExtra: 1, horasDominicalesExtra: 16 }
    let mostrarHoras2 = { idTecnico: '', horasTotales: 0, horasNormales: 0, horasNocturnas: 0, horasDominicales: 0, horasNormalesExtra: 0, horasNocturnasExtra: 0, horasDominicalesExtra: 0 }

    service.mostrarResumen("Santiago", 3).subscribe((data: any) => {
      mostrarHoras2.idTecnico = 'Santiago';
      mostrarHoras2.horasNormales = data.horas.horasNormales;
      mostrarHoras2.horasNocturnas = data.horas.horasNocturnas;
      mostrarHoras2.horasDominicales = data.horas.horasDominicales;
      mostrarHoras2.horasNormalesExtra = data.horas.horasNormalesExtra;
      mostrarHoras2.horasNocturnasExtra = data.horas.horasNocturnasExtra;
      mostrarHoras2.horasDominicalesExtra = data.horas.horasDominicalesExtra;
      mostrarHoras2.horasTotales = data.horas.horasTotales;

      expect(mostrarHoras2).toEqual(mostrarHoras);
      done()
    });

  });

  it('Retorna mensaje de error y null al consultar una semana que no existe', (done: DoneFn) => {
    const mensajeError = "Revisar semana";

    service.mostrarResumen("Santiago", 60).subscribe((data: any) => {
      expect(data.error).toBe(mensajeError);
      expect(data.horas).toBe(null);
      done();
    });



  
  });

});
