export class TipoGrafico {
	public IdTipoGrafico: number;
	public IdentificadorTipoGrafico: string;
	public NombreTipoGrafico: string;
	public EstadoActivo: string;

	constructor (IdTipoGrafico_: number = null,IdentificadorTipoGrafico_: string = null,NombreTipoGrafico_: string = null,EstadoActivo_: string = null)
	{
		this.IdTipoGrafico = IdTipoGrafico_;
		this.IdentificadorTipoGrafico = IdentificadorTipoGrafico_;
		this.NombreTipoGrafico = NombreTipoGrafico_;
		this.EstadoActivo = EstadoActivo_;
	}
}
