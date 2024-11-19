package com.redesolidaria.Rede_Solidaria.enums; 

public enum EnumTipoInstituicao {
    
    PUBLICA("Pública"),
    PRIVADA("Privada"),
    ONGS("ONGs"); 
    private String val;

    private EnumTipoInstituicao(String val) {
        this.val = val;
    }

    public String getVal() {
        return val;
    }
}
