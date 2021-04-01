export class OpcionesSistemaRol {
	public IdOpcionSistemaRol: number;
	public IdRolUsuario: number;
	public IdOpcionSistema: number;
	public Secuencia: number;
	public Visible: boolean;

	constructor (IdOpcionSistemaRol_: number,IdRolUsuario_: number,IdOpcionSistema_: number,Secuencia_: number,Visible_: boolean)
	{
		this.IdOpcionSistemaRol = IdOpcionSistemaRol_;
		this.IdRolUsuario = IdRolUsuario_;
		this.IdOpcionSistema = IdOpcionSistema_;
		this.Secuencia = Secuencia_;
		this.Visible = Visible_;
	}
}
