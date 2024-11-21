package com.redesolidaria.Rede_Solidaria.service;

import java.util.List;
import java.util.Optional;

import com.redesolidaria.Rede_Solidaria.enums.EnumRole;
import com.redesolidaria.Rede_Solidaria.security.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.redesolidaria.Rede_Solidaria.domain.Usuario;
import com.redesolidaria.Rede_Solidaria.dto.UsuarioDTO;
import com.redesolidaria.Rede_Solidaria.dto.UsuarioInserirDTO;
import com.redesolidaria.Rede_Solidaria.exception.EmailException;
import com.redesolidaria.Rede_Solidaria.exception.SenhaException;
import com.redesolidaria.Rede_Solidaria.repository.UsuarioRepository;

import jakarta.transaction.Transactional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private HttpServletRequest request;

    public List<UsuarioDTO> findAll() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        List<UsuarioDTO> usuariosDTO = usuarios.stream().map(UsuarioDTO::new).toList();
        return usuariosDTO;
    }

    public Optional<Usuario> buscar(Long id) {
        return usuarioRepository.findById(id);
    }

    @Transactional
    public UsuarioDTO inserir(UsuarioInserirDTO usuarioInserirDTO) throws EmailException, SenhaException {
        if (!usuarioInserirDTO.getSenha().equals(usuarioInserirDTO.getConfirmaSenha())) {
            throw new SenhaException("Senha e Confirma Senha não são iguais");
        }

        if (usuarioRepository.findByEmail(usuarioInserirDTO.getEmail()).isPresent()) {
            throw new EmailException("Email já existente");
        }

        Usuario usuario = new Usuario();
        usuario.setNome(usuarioInserirDTO.getNome());
        usuario.setEmail(usuarioInserirDTO.getEmail());
        usuario.setSenha(encoder.encode(usuarioInserirDTO.getSenha()));
        usuario.setRole(EnumRole.VISITANTE);

        usuario = usuarioRepository.save(usuario);

        UsuarioDTO usuarioDTO = new UsuarioDTO(usuario);
        return usuarioDTO;
    }

    public Optional<Usuario> requestUserByToken() {
        String token = request.getHeader("Authorization");
        token = token.substring(7);
        String email = jwtUtil.getUserName(token);
        return usuarioRepository.findByEmail(email);
    }

    public UsuarioDTO getUser() {
        return new UsuarioDTO(requestUserByToken().get());
    }
}