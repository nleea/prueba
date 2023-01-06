import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.scss'],
})
export class UpdatecategoryComponent {
  formulariocategory = new FormGroup({
    nombre: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: CategoryService,
    private toastService: ToastrService
  ) {}

  ngOnInit() {
    this.fb.getOneCategory(this.route.snapshot.params['id']).subscribe({
      next: (data) =>
        (this.formulariocategory = new FormGroup({
          nombre: new FormControl(data.nombre),
        })),
      error(err) {
        console.log(err);
      },
    });
  }

  updateCategory() {
    this.fb
      .updateCategory(
        this.route.snapshot.params['id'],
        this.formulariocategory.getRawValue()
      )
      .subscribe({
        next: () => this.toastService.success('Actualizado'),
        complete: () => this.router.navigate(['/categorias/list']),
        error: ({ error }) => {
            this.toastService.error(error.msg)
        },
      });
  }
}
