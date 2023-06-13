# API rest con prosma js

## Base de datos

---

1. Crear la base de datos en PostgresSQL, solo la base de datos, las tablas seran creadas por PrismaJs
2. Despues de crear la base de datos tener a la mano el usuario y password de acceso, se recomienda que sea un usuario que solo tenag acceso a esta base de datos.
3. Crear el earchivo .env que tndra la ruta de acceso a la base de dtaos de PostgresSQL

```
#DATABASE_URL="postgresql://usuario:randompassword@localhost:5432/nameDB?schema=public"
```

Sustitur los campos de usuario, randompassword y nameDB por el usuario que accede a la tablas, el password de acceso del usuario y el nombre de la base de datos correspondiente.

Con esto ya se tendra la conexion entra la base de datos y nuestra api.

## Esquema de las tablas de base de datos

En la ruta prisma/schema.prisma se encuentra la estructura de las tablas que utilizara nuestra base datos, conformada por el nombre del campo, tipo de campo, longitud.

1. Una vez creado este archivo, si es que no lo tiene o con el archivo que maneje el proyecto, debera correr el siguiente comando en la terminal.

```
npx prisma migrate dev
```

Al ejecutar este comando nos pedira que le demos un nombre a la migración que estemos realizando, esto para generar una carpeta en prisma/migration donde guardara el historico de las migraciones que realicemos, una vez seleccionado el nombre y dado enter, nos crea las tablas que tengamos en nuestra archivo schema.primsa dentro de la base de datos que le indiquemos en nuestro archivo .env.

## Ejecutar proyecto

Para correr el proyecto y poder ocupar las api's ejecutaremos el siguiente comando:

```
npm run dev
```

Esto nos permite correr el proyecto localhost:3000

Para ver las tablas en el navegador mediante un ambiente grafico podemos correr el siguiente comando:

```
npx prisma studio
```

Esto no abre en el localhost:5555 un ambiente grafico para visualizar las tablas que se crearon, los campos y los datos, ademas de que nos permite crear, editar, eliminar registros de las tablas.

[Documentación de prisma](https://www.prisma.io/docs/getting-started/quickstart)
