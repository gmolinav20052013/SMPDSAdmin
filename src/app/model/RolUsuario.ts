export class RolUsuario {
	public IdRolUsuario: number;
	public CodigoRolUsuario: string;
	public NombreRolUsuario: string;
	public DescripcionRolUsuario: string;
	public EstadoRol: string;

	constructor (IdRolUsuario_: number = null,CodigoRolUsuario_: string = null,NombreRolUsuario_: string = null,
        DescripcionRolUsuario_: string = null,EstadoRol_: string = null)
	{
		this.IdRolUsuario = IdRolUsuario_;
		this.CodigoRolUsuario = CodigoRolUsuario_;
		this.NombreRolUsuario = NombreRolUsuario_;
		this.DescripcionRolUsuario = DescripcionRolUsuario_;
		this.EstadoRol = EstadoRol_;
	}
}
