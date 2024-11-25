package com.redesolidaria.Rede_Solidaria.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.redesolidaria.Rede_Solidaria.domain.Instituicao;

@Repository
public interface InstituicaoRepository extends JpaRepository<Instituicao, Long> {

	Instituicao findByEmail(String email);

	@Query("SELECT u FROM Instituicao u WHERE u.razaoSocial LIKE %:busca%")
	List<Instituicao> buscaPorNome(@Param("busca") String busca);

}
