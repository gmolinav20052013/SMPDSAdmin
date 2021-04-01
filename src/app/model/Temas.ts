export class Temas {
	public IdTema: number;
	public IdentificadorTema: string;
	public NombreTema: string;
	public DescripcionTema: string;
	public SecuenciaDespliegue: number;
	public EstadoVisualizacion: string;
	public ColorTema: string;

	constructor (IdTema_: number,IdentificadorTema_: string,NombreTema_: string,DescripcionTema_: string,SecuenciaDespliegue_: number,EstadoVisualizacion_: string,ColorTema_: string)
	{
		this.IdTema = IdTema_;
		this.IdentificadorTema = IdentificadorTema_;
		this.NombreTema = NombreTema_;
		this.DescripcionTema = DescripcionTema_;
		this.SecuenciaDespliegue = SecuenciaDespliegue_;
		this.EstadoVisualizacion = EstadoVisualizacion_;
		this.ColorTema = ColorTema_;
	}
}
