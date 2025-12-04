package com.example.demo.modelo;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "detenido")
public class ModeloDetenido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)	
    @Column(name = "id_detenido")
    @JsonProperty("id_detenido")   // 👈 fuerza snake_case
    private Integer idDetenido;

    @Column(nullable = false, unique = true)
    private String dni;

    @Column(nullable = false)
    private String nombres;

    @Column(nullable = false)
    private String apellidos;

    @Column(name = "fecha_nacimiento")
    @JsonProperty("fecha_nacimiento")   // 👈 igual que en Angular
    private LocalDate fechaNacimiento;

    @Column(name = "motivo_detencion")
    @JsonProperty("motivo_detencion")
    private String motivoDetencion;

    @Column(name = "fecha_ingreso")
    @JsonProperty("fecha_ingreso")
    private LocalDate fechaIngreso;

	public Integer getIdDetenido() {
		return idDetenido;
	}

	public void setIdDetenido(Integer idDetenido) {
		this.idDetenido = idDetenido;
	}

	public String getDni() {
		return dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public LocalDate getFechaNacimiento() {
		return fechaNacimiento;
	}

	public void setFechaNacimiento(LocalDate fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public String getMotivoDetencion() {
		return motivoDetencion;
	}

	public void setMotivoDetencion(String motivoDetencion) {
		this.motivoDetencion = motivoDetencion;
	}

	public LocalDate getFechaIngreso() {
		return fechaIngreso;
	}

	public void setFechaIngreso(LocalDate fechaIngreso) {
		this.fechaIngreso = fechaIngreso;
	}

    // getters y setters...
	
    
}
