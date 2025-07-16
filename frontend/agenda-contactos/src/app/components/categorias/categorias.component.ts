import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html'
})
export class CategoriasComponent implements OnInit {
  categorias: any[] = [];
  nuevaCategoria: string = '';

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

 agregarCategoria() {
  const nombre = this.nuevaCategoria.trim();

  if (!nombre) {
    alert('❗ Debes ingresar un nombre para la categoría.');
    return;
  }

  this.categoriaService.addCategoria(nombre).subscribe(() => {
    this.nuevaCategoria = '';
    this.obtenerCategorias();
  });
}
eliminarCategoria(id: number) {
  if (confirm('¿Estás seguro de eliminar esta categoría?')) {
    this.categoriaService.deleteCategoria(id).subscribe(() => {
      this.obtenerCategorias();
    });
  }
}
editandoId: number | null = null;
nombreEditado: string = '';

editarCategoria(cat: any) {
  this.editandoId = cat.id;
  this.nombreEditado = cat.nombre;
}

guardarEdicionCategoria() {
  if (this.nombreEditado.trim()) {
    this.categoriaService.updateCategoria(this.editandoId!, this.nombreEditado).subscribe(() => {
      this.editandoId = null;
      this.nombreEditado = '';
      this.obtenerCategorias();
    });
  }
}

cancelarEdicionCategoria() {
  this.editandoId = null;
  this.nombreEditado = '';
}


}

