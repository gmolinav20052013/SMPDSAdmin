import { ThrowStmt } from "@angular/compiler";
import { NumericRule } from "devextreme/ui/validation_rules";

export class Indicador {
	public IdIndicador: number;
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
    public AgrupacionSerie: boolean;
	public TituloEjeY: string;
	public FormatoVisualizacionDato: string;
	public FormatoTooltipEncabezado: string;
	public FormatoTooltipDato: string;
	public TituloEjeX: string;
	public TituloEjeXDrilldown: string;
    public IdentificadorTipoGrafico: string;
    public NumeroDecimalesFormato: number;
    public ComparativoPais: boolean;
    public TotalDetalle: number;
    public Visualizacion: string;
    public Visualizaciones: string[];
    public SecuenciaVisualizacionGraficosTablas: number;

	constructor (IdIndicador_: number = null,IdTema_: number = null,IdTipoGrafico_: number = null,CODINDIC_: string = null,CODVISAO_: string = null,
                 CODPERSP_: string = null,CODOBJEC_: string = null,SIGLA_: string = null,SecuenciaVisualizacion_: number = null,
                 EstadoVisualizacion_: string = null,Drilldown_: boolean = null,AgrupacionSerie_: boolean = null,
                 TituloEjeY_: string = null,FormatoVisualizacionDato_: string = null,FormatoTooltipEncabezado_: string = null,
                 FormatoTooltipDato_: string = null,TituloEjeX_: string = null,TituloEjeXDrilldown_: string = null,
                 IdentificadorTipoGrafico_: string = null, NumeroDecimalesFormato_: number = null,
                 ComparativoPais_:boolean = null,TotalDetalle_:number = null,Visualizacion_:string= null, Visualizaciones_: string[] = null,
                 SecuenciaVisualizacionGraficosTablas_:number = null)
	{
		this.IdIndicador = IdIndicador_;
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
        this.AgrupacionSerie = AgrupacionSerie_;
		this.TituloEjeY = TituloEjeY_;
		this.FormatoVisualizacionDato = FormatoVisualizacionDato_;
		this.FormatoTooltipEncabezado = FormatoTooltipEncabezado_;
		this.FormatoTooltipDato = FormatoTooltipDato_;
		this.TituloEjeX = TituloEjeX_;
		this.TituloEjeXDrilldown = TituloEjeXDrilldown_;
        this.IdentificadorTipoGrafico = IdentificadorTipoGrafico_;
        this.NumeroDecimalesFormato = NumeroDecimalesFormato_;
        this.ComparativoPais = ComparativoPais_;
        this.TotalDetalle = TotalDetalle_;
        this.Visualizacion = Visualizacion_;
        this.Visualizaciones = Visualizaciones_;
        this.SecuenciaVisualizacionGraficosTablas = SecuenciaVisualizacionGraficosTablas_;
	}
}
