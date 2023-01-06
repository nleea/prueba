import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environt/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private urlApi = environment.api + '/auth/login';
  logged = false;
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(this.urlApi, data);
  }

  isLogged() {
    this.logged = !this.logged;
  }
}
