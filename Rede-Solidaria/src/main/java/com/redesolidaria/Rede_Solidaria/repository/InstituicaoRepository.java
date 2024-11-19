package com.redesolidaria.Rede_Solidaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.redesolidaria.Rede_Solidaria.domain.Instituicao;

@Repository
public interface InstituicaoRepository extends JpaRepository<Instituicao, Long>{
	
	Instituicao findByEmail(String email);
    //Instituicao findByrazaoSocial(String razaoSocial);

}
