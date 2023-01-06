import { Injectable } from '@angular/core';
import { environment } from '../../../../environt/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesProductService {
  private urlApi = environment.api + '/productos';

  constructor(private http: HttpClient) {}

  getAllProductos(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  createProduct(data: any): Observable<any> {
    return this.http.post(this.urlApi, data);
  }

  updateProductos(id: string, data: any): Observable<any> {
    return this.http.put(this.urlApi + '/' + id, data);
  }

  getOneProductos(id: string): Observable<any> {
    return this.http.get<any>(this.urlApi + '/' + id);
  }

  deleteProductos(id: string) {
    return this.http.delete(this.urlApi + '/' + id);
  }
}
