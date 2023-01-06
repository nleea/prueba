import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent {
  constructor(
    private UsuariosServices: ServicesService,
    private toastService: ToastrService
  ) {}
  ELEMENT_DATA: any = [];

  ngOnInit() {
    this.UsuariosServices.getAllUsuarios().subscribe((data) => {
      return (this.ELEMENT_DATA = data.usuarios);
    });
  }

  deleteUsuario(id: string) {
    this.UsuariosServices.deleteUsuario(id).subscribe({
      next: () => this.toastService.success('Usuario Eliminado'),
      error: ({ error }) => {
        error.errors.map((message: any) =>
          this.toastService.error(message.msg)
        );
      },
      complete: () => this.ngOnInit(),
    });
  }
}
