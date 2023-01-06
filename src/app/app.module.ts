import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { MatTableModule } from '@angular/material/table';
import { AddCategoryComponent } from './component/categoria/add-category/add-category.component';
import { ListComponent } from './component/categoria/list/list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdatecategoryComponent } from './component/categoria/updatecategory/updatecategory.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CrearComponent } from './component/usuarios/crear/crear.component';
import { EditarComponent } from './component/usuarios/editar/editar.component';
import { ListarComponent } from './component/usuarios/listar/listar.component';
import { CreatProductoComponent } from './component/product/creat-producto/creat-producto.component';
import { ListarProductoComponent } from './component/product/listar-producto/listar-producto.component';
import { EditarProductoComponent } from './component/product/editar-producto/editar-producto.component';

import { ToastModule } from '@coreui/angular';
import { IconSetModule, IconModule } from '@coreui/icons-angular';
import { Interceptor } from './component/interceptors/HttpInterceptors';
import { AuthComponent } from './pages/auth/auth.component';

import { AlwaysAuthGuard } from './guard/authGuard';

@NgModule({
  declarations: [
    AppComponent,

    CategoriaComponent,
    ProductosComponent,
    AddCategoryComponent,
    ListComponent,
    UpdatecategoryComponent,
    UsuariosComponent,
    CrearComponent,
    EditarComponent,
    ListarComponent,
    CreatProductoComponent,
    ListarProductoComponent,
    EditarProductoComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    IconSetModule,
    IconModule,
    ToastModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    { provide: AlwaysAuthGuard },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
