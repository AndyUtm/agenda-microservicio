const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let categorias = [
  { id: 1, nombre: 'Familia' },
  { id: 2, nombre: 'Trabajo' }
];

app.get('/categorias', (req, res) => {
  res.json(categorias);
});

app.post('/categorias', (req, res) => {
  const nuevaCategoria = { id: Date.now(), nombre: req.body.nombre };
  categorias.push(nuevaCategoria);
  res.status(201).json(nuevaCategoria);
});

app.listen(PORT, () => {
  console.log(`categorias-service corriendo en http://localhost:${PORT}`);
});

app.delete('/categorias/:id', (req, res) => {
  const id = parseInt(req.params.id);
  categorias = categorias.filter(c => c.id !== id);
  res.sendStatus(204); // No Content
});

app.put('/categorias/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre } = req.body;

  const categoria = categorias.find(c => c.id === id);
  if (categoria) {
    categoria.nombre = nombre;
    res.json(categoria);
  } else {
    res.status(404).send('Categoría no encontrada');
  }
});


