export interface DatoGenericoBoolean {
    id: boolean,
    nombre: string
  }

  export interface DatoGenericoCaracter {
    id: string,
    nombre: string
  }


  export class ClaseGenericaCaracter {
    Id: string;
    Nombre: string;

    constructor(
      id: string = null,
      nombre: string = null
    )
    {
      this.Id = id;
      this.Nombre = nombre;
    }


  }

