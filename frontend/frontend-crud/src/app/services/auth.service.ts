  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    private apiUrl = 'http://localhost:8092/api/usuarios/login'; // Ajusta tu endpoint

    constructor(private http: HttpClient) {}

    login(usuario: string, password: string): Observable<any> {
      return this.http.post<any>(this.apiUrl, { nomUsuario: usuario, password });
    }

    guardarToken(token: string): void {
      localStorage.setItem('token', token);
    }

    obtenerToken(): string | null {
      return localStorage.getItem('token');
    }

    eliminarToken(): void {
      localStorage.removeItem('token');
    }

    estaAutenticado(): boolean {
      return !!this.obtenerToken();
    }
  }
