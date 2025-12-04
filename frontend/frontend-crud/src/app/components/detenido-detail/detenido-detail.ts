import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetenidoService } from '../../services/detenido';
import { Detenido } from '../../models/detenido.model'; // usa tu interfaz

@Component({
  selector: 'app-detenido-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './detenido-detail.html',
  styleUrls: ['./detenido-detail.css']
})
export class DetenidoDetailComponent implements OnInit {
  detenido?: Detenido;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detenidoService: DetenidoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.detenidoService.getDetenidoById(+id).subscribe((data: Detenido) => {
        this.detenido = data;
      });
    }
  }
  
}

