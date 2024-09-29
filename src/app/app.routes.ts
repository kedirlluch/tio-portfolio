import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { BiografiaComponent } from './components/biografia/biografia.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'introduccion', pathMatch: 'full' },
  { path: 'introduccion', component: IntroduccionComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'biografia', component: BiografiaComponent },
  { path: 'contacto', component: ContactoComponent }
];
