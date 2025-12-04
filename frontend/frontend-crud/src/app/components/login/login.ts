import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  usuario: string = '';
  password: string = '';
  mensajeError: string = ''; 
  mensajeExito: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.mensajeError = '';
    this.mensajeExito = '';

    if (!this.usuario || !this.password) {
      this.mensajeError = 'Por favor, complete todos los campos';
      return;
    }

    this.authService.login(this.usuario, this.password).subscribe({
      next: (response) => {
        if (response.success) {
          // ✅ 1️⃣ Guardar token y usuario completo (opcionalmente rol)
          this.authService.guardarToken(response.token);
          localStorage.setItem('usuario', response.usuario);
          localStorage.setItem('rol', response.rol);

          this.mensajeExito = `¡Bienvenido ${response.usuario}! Redirigiendo...`;

          // ✅ 2️⃣ Redirección al área protegida
          setTimeout(() => {
            this.router.navigate(['/detenidos']);
          }, 1000);
        } else {
          this.mensajeError = response.message || 'Credenciales incorrectas o usuario inactivo';
        }
      },
      error: (err) => {
        this.mensajeError = 'Error en el servidor o credenciales inválidas';
        console.error(err);
      }
    });
  }
}
  