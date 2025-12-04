import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true, // ✅ importante si usas Angular standalone
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'] 
})
export class LayoutComponent {
  constructor() {}

  logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  }
}
