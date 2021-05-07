export class Periodo {
    public IdPeriodo: number;
	public AnioPeriodo: number;
    public EstadoVisualizacion: string;

    constructor (idperiodo: number = null,anioperiodo: number = null, estadovisualizacion: string = null)
	{
		this.IdPeriodo = idperiodo;
		this.AnioPeriodo = anioperiodo;
        this.EstadoVisualizacion = estadovisualizacion;
	}
}
