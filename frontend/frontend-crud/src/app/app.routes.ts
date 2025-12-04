import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { LayoutComponent } from './components/layout/layout';
import { DetenidoListComponent } from './components/detenido-list/detenido-list';
import { DetenidoDetailComponent } from './components/detenido-detail/detenido-detail';
import { DetenidoFormComponent } from './components/detenido-form/detenido-form';
import { AuthGuard } from './guards/auth.guard'; // ✅ Importar el guard

export const routes: Routes = [
  // 🔓 Ruta pública
  { path: 'login', component: LoginComponent },

  // 🔒 Área protegida (usa LayoutComponent como contenedor principal)
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard], // ✅ Protege todas las rutas hijas
    children: [
      { path: 'detenidos', component: DetenidoListComponent },
      { path: 'detenidos/nuevo', component: DetenidoFormComponent },
      { path: 'detenidos/:id', component: DetenidoDetailComponent },
      { path: 'detenidos/:id/editar', component: DetenidoFormComponent }
    ]
  },

  // 🔁 Redirección por defecto
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // 🚫 Ruta no encontrada
  { path: '**', redirectTo: '/login' }
];
