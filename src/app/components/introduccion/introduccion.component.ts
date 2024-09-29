import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-introduccion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.scss']
})
export class IntroduccionComponent {}
