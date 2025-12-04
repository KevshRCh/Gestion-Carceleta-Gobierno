package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.interfaces.IDetenido;
import com.example.demo.modelo.ModeloDetenido;

@Service
@Transactional
public class DetenidoService {
    
    @Autowired
    private IDetenido data;
    
    public List<ModeloDetenido> listar() {
        return data.findAll();
    }
    
    public Optional<ModeloDetenido> listarId(int idDetenido) {
        return data.findById(idDetenido);
    }
    
    public ModeloDetenido guardar(ModeloDetenido detenido) {
        return data.save(detenido);
    }
    
    public void eliminar(int idDetenido) {
        data.deleteById(idDetenido);
    }
    
    public boolean existePorId(int idDetenido) {
        return data.existsById(idDetenido);
    }

    // 🔍 Nuevo método de búsqueda
    public List<ModeloDetenido> buscarPorNombreODni(String query) {
        return data.findByDniContainingIgnoreCaseOrNombresContainingIgnoreCase(query, query);
    }
}
