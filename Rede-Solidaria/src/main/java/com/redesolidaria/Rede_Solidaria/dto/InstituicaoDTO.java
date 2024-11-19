package com.redesolidaria.Rede_Solidaria.dto;

import com.redesolidaria.Rede_Solidaria.domain.Instituicao;
import com.redesolidaria.Rede_Solidaria.enums.EnumTipoInstituicao;

public class InstituicaoDTO {

	private Long id;
	private String razaoSocial;
	private EnumTipoInstituicao tipo;

	public InstituicaoDTO(Instituicao instituicao) {
		this.id = instituicao.getId();
		this.razaoSocial = instituicao.getRazaoSocial();
		this.tipo = instituicao.getTipo();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRazaoSocial() {
		return razaoSocial;
	}

	public void setRazaoSocial(String razaoSocial) {
		this.razaoSocial = razaoSocial;
	}

	public EnumTipoInstituicao getTipo() {
		return tipo;
	}

	public void setTipo(EnumTipoInstituicao tipo) {
		this.tipo = tipo;
	}

}
