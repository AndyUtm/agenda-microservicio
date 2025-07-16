import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoriaService {
  private apiUrl = 'http://localhost:3001/categorias';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addCategoria(nombre: string): Observable<any> {
    return this.http.post(this.apiUrl, { nombre });
  }

  deleteCategoria(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}`);
}

updateCategoria(id: number, nombre: string) {
  return this.http.put(`${this.apiUrl}/${id}`, { nombre });
}

}
