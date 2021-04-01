export class TiposGraficos {
	public IdTipoGrafico: number;
	public IdentificadorTipoGrafico: string;
	public NombreTipoGrafico: string;
	public EstadoActivo: string;

	constructor (IdTipoGrafico_: number,IdentificadorTipoGrafico_: string,NombreTipoGrafico_: string,EstadoActivo_: string)
	{
		this.IdTipoGrafico = IdTipoGrafico_;
		this.IdentificadorTipoGrafico = IdentificadorTipoGrafico_;
		this.NombreTipoGrafico = NombreTipoGrafico_;
		this.EstadoActivo = EstadoActivo_;
	}
}
