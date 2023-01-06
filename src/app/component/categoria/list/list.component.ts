import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../interfaces/category';

import { CategoryService } from '../services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(
    private categoryServ: CategoryService,
    private toastService: ToastrService
  ) {}

  ELEMENT_DATA: any = [];

  ngOnInit() {
    this.categoryServ.getAllCategory().subscribe((data) => {
      return (this.ELEMENT_DATA = data.categorias);
    });
  }

  deleteCategory(id: string) {
    this.categoryServ.deleteCategory(id).subscribe({
      next: () => this.toastService.success('Eliminado con exito'),
      error: ({ error }) => {
        error.errors.map((message: any) =>
          this.toastService.error(message.msg)
        );
      },
      complete: () => this.ngOnInit(),
    });
  }
}
