export class RelacionTemasIndicadores {
	public IdRelacionTemaIndicador: number;
	public IdTema: number;
	public IdTipoGrafico: number;
	public CODINDIC: string;
	public CODVISAO: string;
	public CODPERSP: string;
	public CODOBJEC: string;
	public SIGLA: string;
	public SecuenciaVisualizacion: number;
	public EstadoVisualizacion: string;
	public Drilldown: boolean;
	public TituloEjeY: string;
	public FormatoVisualizacionDato: string;
	public FormatoTooltipEncabezado: string;
	public FormatoTooltipDato: string;
	public TituloEjeX: string;
	public TituloEjeXDrilldown: string;

	constructor (IdRelacionTemaIndicador_: number,IdTema_: number,IdTipoGrafico_: number,CODINDIC_: string,CODVISAO_: string,CODPERSP_: string,CODOBJEC_: string,SIGLA_: string,SecuenciaVisualizacion_: number,EstadoVisualizacion_: string,Drilldown_: boolean,TituloEjeY_: string,FormatoVisualizacionDato_: string,FormatoTooltipEncabezado_: string,FormatoTooltipDato_: string,TituloEjeX_: string,TituloEjeXDrilldown_: string)
	{
		this.IdRelacionTemaIndicador = IdRelacionTemaIndicador_;
		this.IdTema = IdTema_;
		this.IdTipoGrafico = IdTipoGrafico_;
		this.CODINDIC = CODINDIC_;
		this.CODVISAO = CODVISAO_;
		this.CODPERSP = CODPERSP_;
		this.CODOBJEC = CODOBJEC_;
		this.SIGLA = SIGLA_;
		this.SecuenciaVisualizacion = SecuenciaVisualizacion_;
		this.EstadoVisualizacion = EstadoVisualizacion_;
		this.Drilldown = Drilldown_;
		this.TituloEjeY = TituloEjeY_;
		this.FormatoVisualizacionDato = FormatoVisualizacionDato_;
		this.FormatoTooltipEncabezado = FormatoTooltipEncabezado_;
		this.FormatoTooltipDato = FormatoTooltipDato_;
		this.TituloEjeX = TituloEjeX_;
		this.TituloEjeXDrilldown = TituloEjeXDrilldown_;
	}
}
