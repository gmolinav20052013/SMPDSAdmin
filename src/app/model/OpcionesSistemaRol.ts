export class OpcionesSistemaRol {
	public IdOpcionSistemaRol: number;
	public IdRolUsuario: number;
	public IdOpcionSistema: number;
	public Secuencia: number;
	public Visible: boolean;

	constructor (IdOpcionSistemaRol_: number = null,IdRolUsuario_: number = null,IdOpcionSistema_: number = null,
                Secuencia_: number = null,Visible_: boolean = null)
	{
		this.IdOpcionSistemaRol = IdOpcionSistemaRol_;
		this.IdRolUsuario = IdRolUsuario_;
		this.IdOpcionSistema = IdOpcionSistema_;
		this.Secuencia = Secuencia_;
		this.Visible = Visible_;
	}
}
