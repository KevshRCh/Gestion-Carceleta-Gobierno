import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // 🔹 Importa FormsModule para ngModel
import { DetenidoService } from '../../services/detenido';
import { Detenido } from '../../models/detenido.model';

@Component({
  selector: 'app-detenido-list',
  standalone: true,
  imports: [CommonModule, DatePipe, RouterModule, FormsModule],
  templateUrl: './detenido-list.html',
  styleUrls: ['./detenido-list.css']
})
export class DetenidoListComponent implements OnInit {
  detenidos: Detenido[] = [];
  detenidosFiltrados: Detenido[] = [];
  terminoBusqueda: string = '';
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private detenidoService: DetenidoService) {}

  ngOnInit(): void {
    this.loadDetenidos();
  }

  loadDetenidos(): void {
    this.isLoading = true;
    this.detenidoService.getDetenidos().subscribe({
      next: (response: Detenido[]) => {
        this.detenidos = response;
        this.detenidosFiltrados = [...this.detenidos];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('❌ Error al cargar detenidos:', err);
        this.errorMessage = 'No se pudo cargar la lista de detenidos.';
        this.isLoading = false;
      }
    });
  }

  buscarDetenidos(): void {
    const termino = this.terminoBusqueda.toLowerCase().trim();
    if (!termino) {
      this.detenidosFiltrados = [...this.detenidos];
    } else {
      this.detenidosFiltrados = this.detenidos.filter(det =>
        det.nombres.toLowerCase().includes(termino) ||
        det.apellidos.toLowerCase().includes(termino) ||
        det.dni.toString().includes(termino)
      );
    }
  }

  eliminarDetenido(id: number): void {
    if (confirm('¿Estás seguro de eliminar este detenido?')) {
      this.detenidoService.eliminarDetenido(id).subscribe({
        next: () => this.loadDetenidos(),
        error: (err) => {
          this.errorMessage = 'No se pudo eliminar el detenido.';
          console.error('Error al eliminar:', err);
        }
      });
    }
  }
}
