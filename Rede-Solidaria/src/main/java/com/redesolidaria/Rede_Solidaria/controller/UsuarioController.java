package com.redesolidaria.Rede_Solidaria.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.redesolidaria.Rede_Solidaria.dto.UsuarioDTO;
import com.redesolidaria.Rede_Solidaria.dto.UsuarioInserirDTO;
import com.redesolidaria.Rede_Solidaria.repository.UsuarioRepository;
import com.redesolidaria.Rede_Solidaria.service.UsuarioService;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<UsuarioDTO>> listar() {
        return ResponseEntity.ok(usuarioService.findAll());
    }

    @GetMapping("/user")
    public ResponseEntity<UsuarioDTO> getUser() {
        return ResponseEntity.ok(usuarioService.getUser());
    }

    @PostMapping
    public ResponseEntity<UsuarioDTO> cadastrar(@RequestBody UsuarioInserirDTO usuario) {
        return ResponseEntity.ok(usuarioService.inserir(usuario));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        if (usuarioRepository.existsById(id)) {
            usuarioRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

}
