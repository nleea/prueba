import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesProductService } from '../services/services-product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss'],
})
export class EditarProductoComponent {
  formularioProducto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
  });
  constructor(
    private route: ActivatedRoute,
    private fb: ServicesProductService,
    private router: Router,
    private toastService: ToastrService
  ) {}

  ngOnInit() {
    this.fb
      .getOneProductos(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.formularioProducto = new FormGroup({
          nombre: new FormControl(data.nombre),
          precio: new FormControl(data.precio),
        });
      });
  }

  editarProducto() {
    this.fb
      .updateProductos(
        this.route.snapshot.params['id'],
        this.formularioProducto.getRawValue()
      )
      .subscribe({ error: ({ error }) => {
        error.errors.map((message: any) =>
          this.toastService.error(message.msg)
        );
      },complete: () => this.router.navigate(['productos/list']) });
  }
}
