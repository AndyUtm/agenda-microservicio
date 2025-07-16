import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactoService {
  private apiUrl = 'http://localhost:3002/contactos';

  constructor(private http: HttpClient) {}

  getContactos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addContacto(contacto: any): Observable<any> {
    return this.http.post(this.apiUrl, contacto);
  }

  deleteContacto(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}`);
}

updateContacto(id: number, contacto: any) {
  return this.http.put(`${this.apiUrl}/${id}`, contacto);
}


}
