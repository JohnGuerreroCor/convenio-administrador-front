export class ReporteCompetencia {
  personaCodigo!: number;
  personaNombre!: string;
  personaApellido!: string;
  fecha!: string;
  columnas!: {
    [key: string]: string | null;
  };
}
