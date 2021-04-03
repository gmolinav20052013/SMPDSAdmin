export class Usuarios {
	public IdUsuario: number;
	public IdRolUsuario: number;
	public EmailUsuario: string;
	public Password: string;
	public NombreUsuario: string;
	public EstadoUsuario: string;
	public ReiniciaClave: boolean;

	constructor (IdUsuario_: number = null,IdRolUsuario_: number = null,EmailUsuario_: string = null,
        Password_: string = null,NombreUsuario_: string = null,EstadoUsuario_: string = null,ReiniciaClave_: boolean = null)
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
