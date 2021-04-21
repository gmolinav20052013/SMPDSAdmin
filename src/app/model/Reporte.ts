export class Reporte
{
	public IdReporte: number;
	public NombreReporte: string;
    public EstadoActivo: string;
	public Urlpdf: string;
	public Urlxls: string;
    public SecuenciaDespliegue:number;

	constructor (IdReporte_: number = null,NombreReporte_: string = null,
        EstadoActivo_:string = null,
        SecuenciaDespliegue_:number = null,
        Urlpdf_: string = null,Urlxls_: string = null)
	{
		this.IdReporte = IdReporte_;
		this.NombreReporte = NombreReporte_;
        this.EstadoActivo = EstadoActivo_;
        this.SecuenciaDespliegue = SecuenciaDespliegue_;
		this.Urlpdf = Urlpdf_;
		this.Urlxls = Urlxls_;
	}
}
