package com.redesolidaria.Rede_Solidaria.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.redesolidaria.Rede_Solidaria.domain.Instituicao;
import com.redesolidaria.Rede_Solidaria.dto.InstituicaoDTO;
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

	public Optional<Instituicao> buscarPorId(Long id) {
		Optional<Instituicao> instituicaoOpt = instituicaoRepository.findById(id);
		if (instituicaoOpt.isPresent()) {
			return instituicaoOpt;
		}
		return null;
	}


	public Instituicao buscar(Long id) {
		Optional<Instituicao> instituicaoOpt = instituicaoRepository.findById(id);
		if (instituicaoOpt.isPresent()) {
			return instituicaoOpt.get();
		}
		return null;
	}

	public List<InstituicaoDTO> buscaPorNome(String nome) {
		List<Instituicao> instituicoes = instituicaoRepository.buscaPorNome(nome);
		return instituicoes.stream().map(this::converterParaDTO).collect(Collectors.toList());
	}

	private InstituicaoDTO converterParaDTO(Instituicao instituicao) {
		return new InstituicaoDTO(instituicao);
	}

	@Transactional
	public Instituicao inserir(InstituicaoInserirDTO instituicaoInserirDTO) throws EmailException, SenhaException {
		if (instituicaoRepository.findByEmail(instituicaoInserirDTO.getEmail()) != null) {
			throw new EmailException("Email já existente");
		}

		Instituicao instituicao = new Instituicao();
		instituicao.setRazaoSocial(instituicaoInserirDTO.getRazaoSocial());
		instituicao.setEmail(instituicaoInserirDTO.getEmail());
		instituicao.setCnpj(instituicaoInserirDTO.getCnpj());
		instituicao.setEndereco(instituicaoInserirDTO.getEndereco());
		instituicao.setTipo(instituicaoInserirDTO.getTipo());
		instituicao = instituicaoRepository.save(instituicao);

		return instituicao;

	}

	public Instituicao alterar (InstituicaoInserirDTO instituicaoInserirDTO, Long id) {
		Instituicao instituicao = new Instituicao();
		instituicao.setId(id);
		instituicao.setRazaoSocial(instituicaoInserirDTO.getRazaoSocial());
		instituicao.setEmail(instituicaoInserirDTO.getEmail());
		instituicao.setCnpj(instituicaoInserirDTO.getCnpj());
		instituicao.setEndereco(instituicaoInserirDTO.getEndereco());
		instituicao.setTipo(instituicaoInserirDTO.getTipo());
		instituicao = instituicaoRepository.save(instituicao);
		return instituicao;
	}

}