const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

let contactos = [
  { id: 1, nombre: 'Juan', telefono: '123456789', categoriaId: 1 }
];

app.get('/contactos', (req, res) => {
  res.json(contactos);
});

app.post('/contactos', (req, res) => {
  const nuevoContacto = { id: Date.now(), ...req.body };
  contactos.push(nuevoContacto);
  res.status(201).json(nuevoContacto);
});

app.listen(PORT, () => {
  console.log(`contactos-service corriendo en http://localhost:${PORT}`);
});

app.delete('/contactos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  contactos = contactos.filter(c => c.id !== id);
  res.sendStatus(204); // No Content
});

app.put('/contactos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, telefono, categoriaId } = req.body;

  const contacto = contactos.find(c => c.id === id);
  if (contacto) {
    contacto.nombre = nombre;
    contacto.telefono = telefono;
    contacto.categoriaId = categoriaId;
    res.json(contacto);
  } else {
    res.status(404).send('Contacto no encontrado');
  }
});
