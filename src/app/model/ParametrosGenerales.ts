export class ParametrosGenerales {
	public IdParametroGeneral: number;
	public IdentificadorParametro: string;
	public NombreParametro: string;
	public DescripcionParametro: string;
	public TipoDatoParametro: string;
	public ValorParametro: string;

	constructor (IdParametroGeneral_: number,IdentificadorParametro_: string,NombreParametro_: string,DescripcionParametro_: string,TipoDatoParametro_: string,ValorParametro_: string)
	{
		this.IdParametroGeneral = IdParametroGeneral_;
		this.IdentificadorParametro = IdentificadorParametro_;
		this.NombreParametro = NombreParametro_;
		this.DescripcionParametro = DescripcionParametro_;
		this.TipoDatoParametro = TipoDatoParametro_;
		this.ValorParametro = ValorParametro_;
	}
}
