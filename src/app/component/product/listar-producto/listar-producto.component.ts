import { Component } from '@angular/core';
import { ServicesProductService } from '../services/services-product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.scss'],
})
export class ListarProductoComponent {
  ELEMENT_DATA: any = [];

  constructor(
    private producServices: ServicesProductService,
    private toastService: ToastrService
  ) {}

  ngOnInit() {
    this.producServices.getAllProductos().subscribe((data) => {
      return (this.ELEMENT_DATA = data.productos);
    });
  }

  deleteProducto(id: string) {
    this.producServices.deleteProductos(id).subscribe({
      next: () => {
        this.toastService.success('Eliminado con exito');
      },

      error: ({ error }) => {
        error.errors.map((message: any) =>
          this.toastService.error(message.msg)
        );
      },
      complete: () => this.ngOnInit(),
    });
  }
}
