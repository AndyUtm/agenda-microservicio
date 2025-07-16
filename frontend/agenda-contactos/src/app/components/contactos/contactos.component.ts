import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html'
})
export class ContactosComponent implements OnInit {
  contactos: any[] = [];
  categorias: any[] = [];

  nuevoContacto = {
    nombre: '',
    telefono: '',
    categoriaId: ''
  };

  constructor(
    private contactoService: ContactoService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.obtenerContactos();
    this.obtenerCategorias();
  }

  obtenerContactos() {
    this.contactoService.getContactos().subscribe(data => {
      this.contactos = data;
    });
  }

  obtenerCategorias() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }
agregarContacto() {
  const { nombre, telefono, categoriaId } = this.nuevoContacto;

  if (!nombre.trim() || !telefono.trim() || !categoriaId) {
    alert('❗ Todos los campos del contacto son obligatorios.');
    return;
  }

  const contacto = {
    ...this.nuevoContacto,
    categoriaId: Number(categoriaId)
  };

  this.contactoService.addContacto(contacto).subscribe(() => {
    this.nuevoContacto = { nombre: '', telefono: '', categoriaId: '' };
    this.obtenerContactos();
  });
}

obtenerNombreCategoria(id: number): string {
  const categoria = this.categorias.find(c => c.id === id);
  return categoria ? categoria.nombre : 'Sin categoría';
}
eliminarContacto(id: number) {
  if (confirm('¿Deseas eliminar este contacto?')) {
    this.contactoService.deleteContacto(id).subscribe(() => {
      this.obtenerContactos();
    });
  }
}

editandoContactoId: number | null = null;
contactoEditado: any = { nombre: '', telefono: '', categoriaId: '' };

editarContacto(c: any) {
  this.editandoContactoId = c.id;
  this.contactoEditado = { ...c };
}

guardarEdicionContacto() {
  this.contactoService.updateContacto(this.editandoContactoId!, this.contactoEditado).subscribe(() => {
    this.editandoContactoId = null;
    this.contactoEditado = { nombre: '', telefono: '', categoriaId: '' };
    this.obtenerContactos();
  });
}

cancelarEdicionContacto() {
  this.editandoContactoId = null;
  this.contactoEditado = { nombre: '', telefono: '', categoriaId: '' };
}

}
