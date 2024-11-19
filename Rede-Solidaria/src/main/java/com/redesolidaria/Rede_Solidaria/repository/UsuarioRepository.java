package com.redesolidaria.Rede_Solidaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.redesolidaria.Rede_Solidaria.domain.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	
	Usuario findByEmail(String email);
    Usuario findByNome(String nome);

}
