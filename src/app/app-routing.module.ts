import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './pages/auth/auth.component';

import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ListComponent } from './component/categoria/list/list.component';
import { AddCategoryComponent } from './component/categoria/add-category/add-category.component';
import { UpdatecategoryComponent } from './component/categoria/updatecategory/updatecategory.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProductosComponent } from './pages/productos/productos.component';
import { ListarProductoComponent } from './component/product/listar-producto/listar-producto.component';
import { EditarProductoComponent } from './component/product/editar-producto/editar-producto.component';
import { CreatProductoComponent } from './component/product/creat-producto/creat-producto.component';

import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ListarComponent as ListarUsuarios } from './component/usuarios/listar/listar.component';
import { CrearComponent } from './component/usuarios/crear/crear.component';
import { EditarComponent } from './component/usuarios/editar/editar.component';

import { AlwaysAuthGuard } from './guard/authGuard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'categorias',
    component: CategoriaComponent,
    canActivateChild: [AlwaysAuthGuard],
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'add',
        component: AddCategoryComponent,
      },
      {
        path: 'update/:id',
        component: UpdatecategoryComponent,
      },
    ],
  },
  {
    path: 'productos',
    component: ProductosComponent,
    canActivateChild: [AlwaysAuthGuard],
    children: [
      {
        path: 'list',
        component: ListarProductoComponent,
      },
      {
        path: 'add',
        component: CreatProductoComponent,
      },
      {
        path: 'update/:id',
        component: EditarProductoComponent,
      },
    ],
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    canActivateChild: [AlwaysAuthGuard],
    children: [
      {
        path: 'list',
        component: ListarUsuarios,
      },
      {
        path: 'add',
        component: CrearComponent,
      },
      {
        path: 'update/:id',
        component: EditarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ReactiveFormsModule, FormsModule],
})
export class AppRoutingModule {}
