export class Departamento
{
	public IdDepartamento: number;
	public IdentificadorDepartamento: string;
	public NombreDepartamento: string;
	public SecuenciaVisualizacion: number;

	constructor (IdDepartamento_: number = null,IdentificadorDepartamento_: string = null,NombreDepartamento_: string = null,SecuenciaVisualizacion_: number = null)
	{
		this.IdDepartamento = IdDepartamento_;
		this.IdentificadorDepartamento = IdentificadorDepartamento_;
		this.NombreDepartamento = NombreDepartamento_;
		this.SecuenciaVisualizacion = SecuenciaVisualizacion_;
	}
}
