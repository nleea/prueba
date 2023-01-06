import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent {
  formularioUsuario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rol: new FormControl('ADMIN_ROLE', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceUs: ServicesService,
    private toastService: ToastrService
  ) {}

  updateUsuario() {
    this.serviceUs
      .updateUsuarios(
        this.route.snapshot.params['id'],
        this.formularioUsuario.getRawValue()
      )
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
