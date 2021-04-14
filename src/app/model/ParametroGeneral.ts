export class ParametroGeneral {
	public IdParametroGeneral: number;
	public IdentificadorParametro: string;
	public NombreParametro: string;
	public DescripcionParametro: string;
	public TipoDatoParametro: string;
	public ValorParametro: string;

	constructor (IdParametroGeneral_: number = null,IdentificadorParametro_: string = null,NombreParametro_: string = null,
        DescripcionParametro_: string = null,TipoDatoParametro_: string = null,ValorParametro_: string = null)
	{
		this.IdParametroGeneral = IdParametroGeneral_;
		this.IdentificadorParametro = IdentificadorParametro_;
		this.NombreParametro = NombreParametro_;
		this.DescripcionParametro = DescripcionParametro_;
		this.TipoDatoParametro = TipoDatoParametro_;
		this.ValorParametro = ValorParametro_;
	}
}
