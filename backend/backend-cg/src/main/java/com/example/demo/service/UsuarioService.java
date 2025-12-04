package com.example.demo.service;

import com.example.demo.modelo.ModeloUsuario;
import com.example.demo.interfaces.IUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private IUsuario usuarioRepositorio;

    public Optional<ModeloUsuario> login(String nombre, String password) {
        System.out.println("Intentando login con: " + nombre + " / " + password);
        Optional<ModeloUsuario> user = usuarioRepositorio.findByNomUsuarioAndPassword(nombre, password);
        System.out.println("Resultado presente: " + user.isPresent());
        return user;
    }


    public ModeloUsuario registrarUsuario(ModeloUsuario usuario) {
        return usuarioRepositorio.save(usuario);
    }

    public Optional<ModeloUsuario> buscarPorNombre(String nombre) {
        return usuarioRepositorio.findByNomUsuario(nombre);
    }
    
}
