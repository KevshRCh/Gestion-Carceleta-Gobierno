package com.example.demo.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import ch.qos.logback.core.model.Model;

@Controller
public class ControladorInicio {
    
	@GetMapping("/")
	public String mostrarIndex(Model model) {
	    // Puedes agregar datos al modelo si es necesario
	    return "index"; // Asume que tienes index.html en templates/
	}
}