package com.example.demo.interfaces;

import com.example.demo.modelo.ModeloUsuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUsuario extends JpaRepository<ModeloUsuario, Long> {
    Optional<ModeloUsuario> findByNomUsuarioAndPassword(String nomUsuario, String password);
    Optional<ModeloUsuario> findByNomUsuario(String nomUsuario);
    
}
