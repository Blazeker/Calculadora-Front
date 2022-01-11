import { Tecnicos } from "./tecnicos";

export class Horas
{
    idTecnico: Tecnicos["idTecnico"] = "";
    horasTotales: Number = 0;
    horasNormales: Number = 0;
    horasNocturnas: Number = 0;
    horasDominicales: Number = 0;
    horasNormalesExtra: Number = 0;
    horasNocturnasExtra: Number = 0;
    horasDominicalesExtra: Number = 0;
}