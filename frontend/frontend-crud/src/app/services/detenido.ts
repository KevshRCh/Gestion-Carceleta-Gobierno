import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Detenido } from '../models/detenido.model';

@Injectable({
  providedIn: 'root'
})
export class DetenidoService {
  private apiUrl = '/api/detenidos'; // ruta del backend

  constructor(private http: HttpClient) {}

  getDetenidos(): Observable<Detenido[]> {
    return this.http.get<Detenido[]>(this.apiUrl).pipe(
      tap(data => console.log('📌 Detenidos cargados:', data)),
      catchError(this.handleError)
    );
  }

  getDetenidoById(id: number): Observable<Detenido> {
    return this.http.get<Detenido>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  crearDetenido(detenido: Detenido): Observable<Detenido> {
    return this.http.post<Detenido>(this.apiUrl, detenido).pipe(
      catchError(this.handleError)
    );
  }

  actualizarDetenido(id: number, detenido: Detenido): Observable<Detenido> {
    return this.http.put<Detenido>(`${this.apiUrl}/${id}`, detenido).pipe(
      catchError(this.handleError)
    );
  }

  eliminarDetenido(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('❌ Error en servicio de detenido:', error);
    return throwError(() => new Error('Error al conectar con el servidor.'));
  }
}
