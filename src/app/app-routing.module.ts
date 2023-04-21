import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { UsuarioGuardGuard } from './guards/usuario-guard.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'mensajes',
    component: MensajesComponent,
    canActivate:[UsuarioGuardGuard]
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
