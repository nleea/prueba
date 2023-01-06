import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent {
  constructor(
    private router: Router,
    private serviceUs: ServicesService,
    private toastService: ToastrService
  ) {}

  formularioUsuario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rol: new FormControl('ADMIN_ROLE', Validators.required),
  });

  createUsuario() {
    this.serviceUs
      .createUsuarios(this.formularioUsuario.getRawValue())
      .subscribe({
        error: ({ error }) => {
          error.errors.map((message: any) =>
            this.toastService.error(message.msg)
          );
        },
        complete: () => this.router.navigate(['usuarios/list']),
      });
  }
}
