# Backend del proyecto e-Diac

El proyecto esta contruido en node Js, utiliza el ORM sequelize para el manejo y conexión con la base de datos, el cual se usa MySQL

## Creación del archivo .env

Al clonar el proyecto se tiene que crear un archivo .env en la raiz del proyecto el cual contendra las variables de entorno para la conexion a la base de datos

Ejemplo:  
DB_NAME=diac  
DB_HOST=localhost  
DB_USER=root  
DB_PASS=contraseña

## Ejecución del proyecto en un entorno de desarrollo

- __npm i__ para instalar los packetes necesarios
- __npm run dev__ para correr el servidor de desarrollo
