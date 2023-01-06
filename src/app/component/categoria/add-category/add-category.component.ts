import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService as serviceUs } from '../../usuarios/services/services.service';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent {
  constructor(
    private categoryService: CategoryService,
    private serviceUsuario: serviceUs,
    private router: Router,
    private toastService: ToastrService
  ) {}

  users: any = [];

  formulariocategory = new FormGroup({
    nombre: new FormControl('', Validators.required),
    usuario: new FormControl(0, Validators.required),
  });

  ngOnInit() {
    this.serviceUsuario.getAllUsuarios().subscribe((data) => {
      this.users = data.usuarios;
    });
  }

  AddCategory() {
    this.categoryService
      .createCategory(this.formulariocategory.getRawValue())
      .subscribe({
        error: ({ error }) => {
          this.toastService.error(error.msg)
        },
        complete: () => {
          this.toastService.success('Agregado con exito');
          this.router.navigate(['/categorias/list']);
        },
      });
  }
}
