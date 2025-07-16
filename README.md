# genda de Contactos – Aplicación con Microservicios

Esta es una aplicación web construida con **arquitectura de microservicios**, que permite gestionar contactos asociados a categorías. La aplicación está dividida en frontend y backend independientes que se comunican mediante HTTP/REST.

---

## Tecnologías utilizadas

- **Frontend:** Angular 15+
- **Backend:** Node.js + Express
- **Protocolo de comunicación:** HTTP/REST
- **IDE :** Visual Studio Code

---

## Arquitectura del Proyecto

El sistema está compuesto por:

- `categorias-service` – microservicio encargado de gestionar las categorías
- `contactos-service` – microservicio para la gestión de contactos
- `frontend` – aplicación Angular que consume los microservicios

## Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio

````bash
git clone https://github.com/[TU_USUARIO]/agenda-microservicios.git
cd agenda-microservicios


## 2. Ejecutar los microservicios (Node.js)
cd backend/categorias-service
npm install
node index.js
# Corre en http://localhost:3001

cd ../contactos-service
npm install
node index.js
# Corre en http://localhost:3002

## 3. Ejecutar el frontend (Angular)

cd ../../frontend/angular-app
npm install
ng serve
# Abre el navegador en http://localhost:4200

















### 1. Clonar el repositorio

```bash
git clone https://github.com/[TU_USUARIO]/agenda-microservicios.git
cd agenda-microservicios



````
