package com.example.demo.controlador;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.modelo.ModeloDetenido;
import com.example.demo.service.DetenidoService;

@RestController
@RequestMapping("/api/detenidos")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class ControladorDetenido {

    @Autowired
    private DetenidoService service;

    @GetMapping
    public List<ModeloDetenido> listar() {
        return service.listar();
    }

    @PostMapping
    public ResponseEntity<ModeloDetenido> crear(@RequestBody ModeloDetenido detenido) {
        return ResponseEntity.ok(service.guardar(detenido));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ModeloDetenido> obtenerPorId(@PathVariable int id) {
        Optional<ModeloDetenido> detenido = service.listarId(id);
        return detenido.map(ResponseEntity::ok)
                       .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ModeloDetenido> actualizar(
            @PathVariable int id, @RequestBody ModeloDetenido detenido) {
        
        if (!service.existePorId(id)) {
            return ResponseEntity.notFound().build();
        }
        
        detenido.setIdDetenido(id);
        return ResponseEntity.ok(service.guardar(detenido));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable int id) {
        if (!service.existePorId(id)) {
            return ResponseEntity.notFound().build();
        }
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/buscar")
    public List<ModeloDetenido> buscarDetenidos(@RequestParam String query) {
        return service.buscarPorNombreODni(query);
    }
}
