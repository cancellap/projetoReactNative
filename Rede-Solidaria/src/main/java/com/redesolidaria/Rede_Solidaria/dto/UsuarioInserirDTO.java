package com.redesolidaria.Rede_Solidaria.dto;

import jakarta.persistence.Column;

public class UsuarioInserirDTO {

	@Column(name = "nome_usuario", nullable = false)
	private String nome;

	@Column(name = "nome_usuario", nullable = false)
	private String email;

	@Column(name = "senha_usuario", nullable = false)
	private String senha;

	private String confirmaSenha;

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

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getConfirmaSenha() {
		return confirmaSenha;
	}

	public void setConfirmaSenha(String confirmaSenha) {
		this.confirmaSenha = confirmaSenha;
	}

}
