export class QBSINDIC {
    CODVISAO: string;
    CODPERSP: string;
    CODOBJEC: string;
    CODINDIC: string;
    SIGLA: string;

    constructor(codvisao: string = null,
        codpersp: string = null,
        codobjec: string = null,
        codindic: string = null,
        sigla: string  = null
    ) {
        this.CODVISAO = codvisao;
        this.CODPERSP = codpersp;
        this.CODOBJEC = codobjec;
        this.CODINDIC = codindic;
        this.SIGLA = sigla;
    }
}
