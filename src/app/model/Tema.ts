export class Tema {
	public IdTema: number;
	public IdentificadorTema: string;
	public NombreTema: string;
	public DescripcionTema: string;
	public SecuenciaDespliegue: number;
	public EstadoVisualizacion: string;
	public ColorTema: string;
    public ColorMapa: string;
    public CODVISAO: string;
	public CODPERSP: string;


	constructor (IdTema_: number = null,IdentificadorTema_: string = null,NombreTema_: string = null,DescripcionTema_: string = null,
        SecuenciaDespliegue_: number = null,EstadoVisualizacion_: string = null,ColorTema_: string = null,ColorMapa_: string = null,
        CODVISAO_: string = null, CODPERSP_: string = null,)
	{
		this.IdTema = IdTema_;
		this.IdentificadorTema = IdentificadorTema_;
		this.NombreTema = NombreTema_;
		this.DescripcionTema = DescripcionTema_;
		this.SecuenciaDespliegue = SecuenciaDespliegue_;
		this.EstadoVisualizacion = EstadoVisualizacion_;
		this.ColorTema = ColorTema_;
        this.ColorMapa = ColorMapa_;
        this.CODVISAO = CODVISAO_;
        this.CODPERSP = CODPERSP_;
	}
}
