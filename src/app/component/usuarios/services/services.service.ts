import { Injectable } from '@angular/core';
import { environment } from '../../../../environt/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private urlApi = environment.api + '/usuarios';
  constructor(private http: HttpClient) {}

  getAllUsuarios(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  createUsuarios(data: any) {
    return this.http.post(this.urlApi, data);
  }

  updateUsuarios(id: string, data: any): Observable<any> {
    return this.http.put(this.urlApi + '/' + id, data);
  }

  deleteUsuario(id: string) {
    return this.http.delete(this.urlApi + '/' + id);
  }

  getOneUsuario(id: string): Observable<any> {
    return this.http.get<any>(this.urlApi + '/' + id);
  }
}
