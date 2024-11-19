package com.redesolidaria.Rede_Solidaria.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.redesolidaria.Rede_Solidaria.domain.Instituicao;
import com.redesolidaria.Rede_Solidaria.dto.InstituicaoInserirDTO;
import com.redesolidaria.Rede_Solidaria.exception.EmailException;
import com.redesolidaria.Rede_Solidaria.exception.SenhaException;
import com.redesolidaria.Rede_Solidaria.repository.InstituicaoRepository;

import jakarta.transaction.Transactional;

@Service
public class InstituicaoService {

	@Autowired
	private InstituicaoRepository instituicaoRepository;

	public List<Instituicao> findAll() {
		List<Instituicao> instituicao = instituicaoRepository.findAll();
		return instituicao;
	}

	public Instituicao buscar(Long id) {
		Optional<Instituicao> instituicaoOpt = instituicaoRepository.findById(id);
		if (instituicaoOpt.isPresent()) {
			return instituicaoOpt.get();
		}
		return null;
	}

	@Transactional
	public Instituicao inserir(InstituicaoInserirDTO instituicaoInserirDTO) throws EmailException, SenhaException {
		if (instituicaoRepository.findByEmail(instituicaoInserirDTO.getEmail()) != null) {
			throw new EmailException("Email já existente");
		}

		Instituicao instituicao = new Instituicao();
		instituicao.setRazaoSocial(instituicao.getRazaoSocial());
		instituicao.setEmail(instituicao.getEmail());
		instituicao.setCnpj(instituicao.getCnpj());
		instituicao.setEndereco(instituicao.getEndereco());

		instituicao = instituicaoRepository.save(instituicao);

		return instituicao;

	}

}