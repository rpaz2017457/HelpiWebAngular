import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';;
import { RegistrarComponent } from './components/registrar/registrar.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { UsuarioGuard } from './services/usuario.guard';
import { AdminGuard } from './services/admin.guard';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'usuario',
    component: InicioUsuarioComponent,
    canActivate: [UsuarioGuard],
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'servicios/:idHotel', component: ServiciosComponent },
    ],
  },
  {
    path: 'admin',
    component: InicioAdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'servicios/:idHotel', component: ServiciosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
