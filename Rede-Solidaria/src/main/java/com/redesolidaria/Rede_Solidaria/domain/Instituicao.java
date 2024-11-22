package com.redesolidaria.Rede_Solidaria.domain;

import java.util.Objects;

import com.redesolidaria.Rede_Solidaria.enums.EnumRole;
import com.redesolidaria.Rede_Solidaria.enums.EnumTipoInstituicao;

import jakarta.persistence.*;

@Entity
public class Instituicao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "instituicao_id")
	private Long id;

	@Column(name = "razao_social")
	private String razaoSocial;

	@Column
	private String endereco;

	@Column
	private String cnpj;

	@Column(name = "email_instituicao")
	private String email;

	@Enumerated(EnumType.STRING)
	@Column(name = "tipo_instituicao")
	private EnumTipoInstituicao tipo;

	public EnumTipoInstituicao getTipo() {
		return tipo;
	}

	public void setTipo(EnumTipoInstituicao tipo) {
		this.tipo = tipo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Instituicao other = (Instituicao) obj;
		return Objects.equals(id, other.id);
	}

}
