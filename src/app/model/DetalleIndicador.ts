export class DetalleIndicador {
	public IdDetalleIndicador: number;
	public IdIndicador: number;
	public IdTipoGrafico: number;
	public CODINDIC: string;
	public CODVISAO: string;
	public CODPERSP: string;
	public CODOBJEC: string;
	public SIGLA: string;
    public SecuenciaVisualizacion: number;

	constructor (IdDetalleIndicador_: number = null,
                 IdIndicador_: number = null,
                 IdTipoGrafico_: number = null,
                 CODINDIC_: string = null,
                 CODVISAO_: string = null,
                 CODPERSP_: string = null,
                 CODOBJEC_: string = null,
                 SIGLA_: string = null,
                 SecuenciaVisualizacion_: number = null)
	{
		this.IdDetalleIndicador = IdDetalleIndicador_;
		this.IdIndicador = IdIndicador_;
		this.IdTipoGrafico = IdTipoGrafico_;
		this.CODINDIC = CODINDIC_;
		this.CODVISAO = CODVISAO_;
		this.CODPERSP = CODPERSP_;
		this.CODOBJEC = CODOBJEC_;
		this.SIGLA = SIGLA_;
        this.SecuenciaVisualizacion = SecuenciaVisualizacion_;
	}
}
