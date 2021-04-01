export class RolesUsuarios {
	public IdRolUsuario: number;
	public CodigoRolUsuario: string;
	public NombreRolUsuario: string;
	public DescripcionRolUsuario: string;
	public EstadoRol: string;

	constructor (IdRolUsuario_: number,CodigoRolUsuario_: string,NombreRolUsuario_: string,DescripcionRolUsuario_: string,EstadoRol_: string)
	{
		this.IdRolUsuario = IdRolUsuario_;
		this.CodigoRolUsuario = CodigoRolUsuario_;
		this.NombreRolUsuario = NombreRolUsuario_;
		this.DescripcionRolUsuario = DescripcionRolUsuario_;
		this.EstadoRol = EstadoRol_;
	}
}
