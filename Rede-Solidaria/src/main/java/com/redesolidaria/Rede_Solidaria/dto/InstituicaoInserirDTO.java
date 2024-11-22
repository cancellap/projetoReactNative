package com.redesolidaria.Rede_Solidaria.dto;

import com.redesolidaria.Rede_Solidaria.enums.EnumTipoInstituicao;
import jakarta.persistence.Column;

public class InstituicaoInserirDTO {
	@Column(name = "razao_social")
	private String razaoSocial;

	@Column
	private String endereco;

	@Column
	private String cnpj;

	@Column(name = "email_instituicao")
	private String email;

	@Column(name = "tipo_instituicao")
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
