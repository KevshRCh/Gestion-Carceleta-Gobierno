package com.example.demo.controlador;

import com.example.demo.modelo.ModeloUsuario;
import com.example.demo.service.JwtService;
import com.example.demo.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/api/usuarios")
public class ControladorUsuario {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody ModeloUsuario usuario) {
        Map<String, Object> response = new HashMap<>();

        // ✅ Corregido: usa getNomUsuario()
        Optional<ModeloUsuario> userOpt = usuarioService.login(usuario.getNomUsuario(), usuario.getPassword());

        if (userOpt.isPresent()) {
            ModeloUsuario user = userOpt.get();

            // Generar token JWT con el nombre del usuario
            String token = jwtService.generarToken(user.getNomUsuario());

            response.put("success", true);
            response.put("message", "Login exitoso");
            response.put("token", token);
            response.put("rol", user.getRol());
            response.put("usuario", user.getNomUsuario());
        } else {
            response.put("success", false);
            response.put("message", "Credenciales incorrectas o usuario inactivo");
        }

        return response;
    }

    @PostMapping("/registrar")
    public ModeloUsuario registrar(@RequestBody ModeloUsuario usuario) {
        return usuarioService.registrarUsuario(usuario);
    }

    @GetMapping("/{nombre}")
    public Optional<ModeloUsuario> obtenerUsuario(@PathVariable String nombre) {
        return usuarioService.buscarPorNombre(nombre);
    }
}
