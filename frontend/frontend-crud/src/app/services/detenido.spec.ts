import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetenidoService {
  constructor(private http: HttpClient) {}

  getDetenidos(): Observable<any[]> {
    return this.http.get<any[]>('/api/detenidos');
  }

  getDetenidoById(id: number): Observable<any> {
    return this.http.get<any>(`/api/detenidos/${id}`);
  }
}
