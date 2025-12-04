import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetenidoService } from '../../services/detenido';

@Component({
  selector: 'app-detenido-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './detenido-form.html',
  styleUrls: ['./detenido-form.css']
})
export class DetenidoFormComponent implements OnInit {
  detenidoForm!: FormGroup;
  editando: boolean = false;
  detenidoId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private detenidoService: DetenidoService
  ) {}

  ngOnInit(): void {
    this.detenidoForm = this.fb.group({
      dni: ['', [Validators.required, Validators.minLength(8)]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fecha_nacimiento: [''],
      motivo_detencion: [''],
      fecha_ingreso: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editando = true;
      this.detenidoId = +id;
      this.detenidoService.getDetenidoById(this.detenidoId).subscribe((detenido) => {
        this.detenidoForm.patchValue(detenido);
      });
    }
  }

  guardar(): void {
    if (this.detenidoForm.invalid) return;

    const datos = this.detenidoForm.value;

    if (this.editando) {
      this.detenidoService.actualizarDetenido(this.detenidoId, datos).subscribe(() => {
        this.router.navigate(['/detenidos']);
      });
    } else {
      this.detenidoService.crearDetenido(datos).subscribe(() => {
        this.router.navigate(['/detenidos']);
      });
    }
  }
}
