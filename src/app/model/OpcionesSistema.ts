export class OpcionesSistema {
	public IdOpcionSistema: number;
	public IdentificadorOpcionSistema: string;
	public NombreOpcionSistema: string;
	public DescripcionOpcionSistema: string;
	public Ruta: string;
	public Activa: boolean;

	constructor (IdOpcionSistema_: number = null,IdentificadorOpcionSistema_: string = null,NombreOpcionSistema_: string = null,
                 DescripcionOpcionSistema_: string = null,Ruta_: string = null,Activa_: boolean = null)
	{
		this.IdOpcionSistema = IdOpcionSistema_;
		this.IdentificadorOpcionSistema = IdentificadorOpcionSistema_;
		this.NombreOpcionSistema = NombreOpcionSistema_;
		this.DescripcionOpcionSistema = DescripcionOpcionSistema_;
		this.Ruta = Ruta_;
		this.Activa = Activa_;
	}
}
