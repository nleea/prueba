import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from './service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  formularioLogin = new FormGroup({
    correo: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private authServ: ServiceService,
    private router: Router,
    private toastService: ToastrService
  ) {}

  login() {
    this.authServ.login(this.formularioLogin.getRawValue()).subscribe({
      next: (data) => {
        if (data.token) {
          this.authServ.isLogged();
          localStorage.setItem('token', data.token);
        }
      },
      error: () => this.toastService.error('Datos No validos'),
      complete: () => this.router.navigate(['/categorias/list']),
    });
  }
}
