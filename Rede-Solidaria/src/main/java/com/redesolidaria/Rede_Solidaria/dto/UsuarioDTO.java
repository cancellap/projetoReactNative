package com.redesolidaria.Rede_Solidaria.dto;

import com.redesolidaria.Rede_Solidaria.domain.Usuario;
import com.redesolidaria.Rede_Solidaria.enums.EnumRole;

public class UsuarioDTO {
	private Long id;
	private String nome;
	private String email;
	private EnumRole role;

	public UsuarioDTO() {
	}

	public UsuarioDTO(Usuario usuario) {
		this.id = usuario.getId();
		this.nome = usuario.getNome();
		this.email = usuario.getEmail();
		this.role = usuario.getRole();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public EnumRole getRole() {
		return role;
	}

	public void setRole(EnumRole role) {
		this.role = role;
	}
}
