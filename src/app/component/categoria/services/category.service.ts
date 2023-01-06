import { Injectable } from '@angular/core';
import { environment } from '../../../../environt/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private urlApi = environment.api + '/categorias';

  constructor(private http: HttpClient) {}

  getAllCategory(): Observable<Category> {
    return this.http.get<Category>(this.urlApi);
  }

  createCategory(data: any): Observable<any> {
    return this.http.post(this.urlApi, data);
  }

  updateCategory(id: string, data: any): Observable<any> {
    return this.http.put(this.urlApi + '/' + id, data);
  }

  deleteCategory(id: string) {
    return this.http.delete(this.urlApi + '/' + id);
  }

  getOneCategory(id: string): Observable<any> {
    return this.http.get<any>(this.urlApi + '/' + id);
  }
}
