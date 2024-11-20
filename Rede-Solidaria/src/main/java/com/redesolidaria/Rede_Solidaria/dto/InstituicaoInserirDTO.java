package com.redesolidaria.Rede_Solidaria.dto;

import com.redesolidaria.Rede_Solidaria.enums.EnumTipoInstituicao;

public class InstituicaoInserirDTO {

	private String razaoSocial;
	private String endereco;
	private String cnpj;
	private String email;
	private EnumTipoInstituicao tipo;
	
	public EnumTipoInstituicao getTipo() {
		return tipo;
	}

	public void setTipo(EnumTipoInstituicao tipo) {
		this.tipo = tipo;
	}

	public String getRazaoSocial() {
		return razaoSocial;
	}

	public void setRazaoSocial(String razaoSocial) {
		this.razaoSocial = razaoSocial;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
