import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService as serviceCa } from '../../categoria/services/category.service';
import { ServicesProductService } from '../services/services-product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-creat-producto',
  templateUrl: './creat-producto.component.html',
  styleUrls: ['./creat-producto.component.scss'],
})
export class CreatProductoComponent {
  categoria: any = [];

  constructor(
    private serviceCategoria: serviceCa,
    private serviceProduct: ServicesProductService,
    private router: Router,
    private toastService: ToastrService
  ) {}

  formulariocategory = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    categoria: new FormControl(0, Validators.required),
  });

  ngOnInit() {
    this.serviceCategoria.getAllCategory().subscribe((data) => {
      this.categoria = data.categorias;
    });
  }

  AddProduct() {
    this.serviceProduct
      .createProduct(this.formulariocategory.getRawValue())
      .subscribe({
        complete: () => {
          this.toastService.success("Agregado con exito")
          this.router.navigate(['/productos/list']);
        },
        error: ({ error }) => {
          error.errors.map((message: any) =>
            this.toastService.error(message.msg)
          );
        },
      });
  }
}
