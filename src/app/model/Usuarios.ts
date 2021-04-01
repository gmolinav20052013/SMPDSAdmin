export class Usuarios {
	public IdUsuario: number;
	public IdRolUsuario: number;
	public EmailUsuario: string;
	public Password: string;
	public NombreUsuario: string;
	public EstadoUsuario: string;
	public ReiniciaClave: boolean;

	constructor (IdUsuario_: number,IdRolUsuario_: number,EmailUsuario_: string,Password_: string,NombreUsuario_: string,EstadoUsuario_: string,ReiniciaClave_: boolean)
	{
		this.IdUsuario = IdUsuario_;
		this.IdRolUsuario = IdRolUsuario_;
		this.EmailUsuario = EmailUsuario_;
		this.Password = Password_;
		this.NombreUsuario = NombreUsuario_;
		this.EstadoUsuario = EstadoUsuario_;
		this.ReiniciaClave = ReiniciaClave_;
	}
}
