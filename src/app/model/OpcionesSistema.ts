export class OpcionesSistema {
	public IdOpcionSistema: number;
	public IdentificadorOpcionSistema: string;
	public NombreOpcionSistema: string;
	public DescripcionOpcionSistema: string;
	public Ruta: string;
	public Activa: boolean;

	constructor (IdOpcionSistema_: number,IdentificadorOpcionSistema_: string,NombreOpcionSistema_: string,DescripcionOpcionSistema_: string,Ruta_: string,Activa_: boolean)
	{
		this.IdOpcionSistema = IdOpcionSistema_;
		this.IdentificadorOpcionSistema = IdentificadorOpcionSistema_;
		this.NombreOpcionSistema = NombreOpcionSistema_;
		this.DescripcionOpcionSistema = DescripcionOpcionSistema_;
		this.Ruta = Ruta_;
		this.Activa = Activa_;
	}
}
