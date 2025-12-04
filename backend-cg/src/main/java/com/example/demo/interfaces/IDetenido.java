package com.example.demo.interfaces;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.modelo.ModeloDetenido;

public interface IDetenido extends JpaRepository<ModeloDetenido, Integer> {

    // 🔍 Método personalizado para búsqueda por DNI o nombre (insensible a mayúsculas)
    List<ModeloDetenido> findByDniContainingIgnoreCaseOrNombresContainingIgnoreCase(String dni, String nombres);
}
