package com.redesolidaria.Rede_Solidaria.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.redesolidaria.Rede_Solidaria.domain.Instituicao;
import com.redesolidaria.Rede_Solidaria.dto.InstituicaoInserirDTO;
import com.redesolidaria.Rede_Solidaria.repository.InstituicaoRepository;
import com.redesolidaria.Rede_Solidaria.service.InstituicaoService;

@RestController
@RequestMapping("/instituicao")
public class InstituicaoController {
	
	@Autowired
	private InstituicaoRepository instituicaoRepository;

	@Autowired
	private InstituicaoService instituicaoService;

	@GetMapping
	public ResponseEntity<List<Instituicao>> listar() {
		return ResponseEntity.ok(instituicaoService.findAll());
	}

	@PostMapping
	public ResponseEntity<Instituicao> cadastrar(@RequestBody InstituicaoInserirDTO instituicao) {
		return ResponseEntity.ok(instituicaoService.inserir(instituicao));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> excluir(@PathVariable Long id) {
		if (instituicaoRepository.existsById(id)) {
			instituicaoRepository.deleteById(id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
    }
	
}