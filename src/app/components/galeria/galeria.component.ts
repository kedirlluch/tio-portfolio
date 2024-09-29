import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-galeria',
  standalone: true,
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  imports: [CommonModule] // Incluir CommonModule en imports
})
export class GaleriaComponent {
  // Arreglo con los nombres de las imágenes
  images: string[] = [];

  constructor() {
    this.loadImages();
  }

  loadImages() {
    // Cargar imágenes de forma secuencial
    for (let i = 1; i <= 28; i++) { // Cambia el 10 por el número total de imágenes
      this.images.push(`assets/${i}.jpg`); // Asegúrate de que el path sea correcto
    }
  }
}
