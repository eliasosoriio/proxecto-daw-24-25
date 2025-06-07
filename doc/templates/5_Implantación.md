# FASE DE IMPLANTACIÓN

- [FASE DE IMPLANTACIÓN](#fase-de-implantación)
  - [1- Manual técnico](#1--manual-técnico)
    - [1.1- Instalación](#11--instalación)
    - [1.2- Administración do sistema](#12--administración-do-sistema)
  - [2- Manual de usuario](#2--manual-de-usuario)
  - [3- Melloras futuras](#3--melloras-futuras)

## 1- Manual técnico

### 1.1- Instalación

#### 1.1.1- Local

Requisitos mínimos de hardware recomendados:

- Un equipo con al menos 8 GB de RAM.
- Espacio libre en el disco duro para los contenedores y la base de datos.
- Conexión a internet para la instalación de dependencias.

Software necesario:

- [Git](https://git-scm.com/) para clonar el repositorio del proyecto.
- [Node.js](https://nodejs.org/) para la instalación de dependencias _npm install_ y ejecución del front _npm run dev_.
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/) para levantar los contenedores del entorno (api y base de datos).
- Navegador moderno y actualizado para acceder al frontend.

Pasos para el despliegue:

- Clonamos el repositorio mediante Git.
- Accedemos a la carpeta _lamarta.es_ y hacemos un _npm install_ para instalar las dependencias.
- Una vez instaladas, hacemos _npm run dev_ para desplegar el frontend. Por defecto, en el puerto 5173,
- Para el backend, accedemos a _api.lamarta.es_ y levantamos los contenedores con _docker-compose up_.
- Una vez levantados, accedemos a _phpMyAdmin_, generalmente en el puerto 8000. Y se importa el [dump de la base de datos](../../api.lamarta.es/phpmyadmin-dump-producto_fideplus_lamarta.sql).

Con todo esto listo, ya podríamos iniciar sesión en el club con cualquiera de los tipos de usuario y continuar el desarrollo.


#### 1.1.2- Producción

Software necesario:

- Disponer de un servidor que permita desplegar proyectos de React y archivos PHP.

Pasos para el despliegue:

- Una vez nuestra aplicación en desarrollo está lista para pasar a producción, hacemos _npm run build_ en _lamarta.es_. Esto genera una carpeta _dist_ en la que se encontrarán los archivos que tenemos que subir a la carpeta raíz en nuestro servidor.
- Cuando ya está el frontend, creamos una carpeta en la raíz del servidor llamada _api_. Aquí subiremos los archivos PHP de la API.
- El siguiente paso es crear una base de datos en el servidor. Se utiliza el mismo dump que en local y después en los archivos de la API, se cambian los parámetros de acceso a la base de datos.

Con todo esto listo, ya podríamos iniciar sesión en el club con cualquiera de los tipos de usuario.


#### 1.1.3- Tipos de usuarios

Hay dos tipos de usuarios:

- **Administrador:** Tiene acceso a un panel para gestionar a los afiliados y a las recompensas.
- **Afiliado:** Puede ver los puntos que va acumulando y las recompensas disponibles.

Las cuentas que vienen en el dump, tienen como contraseña *Abc1234..* las de afiliado y *Admin1234..* la de administrador.


### 1.2- Administración do sistema

> *EXPLICACIÓN:* Neste apartado indicarase información relativa á administración do sistema, é dicir, tarefas que se deberán realizar unha vez que o sistema estea funcionando.
>
> Como:
>
> - Copias de seguridade do sistema.
> - Copias de seguridade da base de datos.
> - Xestión de usuarios.
> - Xestión seguridade.
> - Xestión de incidencias, que poden ser de dous tipos: de sistema (accesos non autorizados á BD, etc) ou de fallos no software.
>
> No caso de que sexan precisas.

## 2- Manual de usuario

> *EXPLICACIÓN:* Neste apartado fara
>
> - Indicar se será necesario formar ós usuarios. En caso afirmativo planificar.
> - Manual de usuario, FAQ ou outro xeito que sexa o máis adecuado para que os usuarios saiban usar a nosa aplicación informática.
>
> Todo esto se a aplicación require de manual de usuario.

## 3- Melloras futuras

> *EXPLICACIÓN:* Neste apartado incluiranse as posibilidades de mellora da aplicación no futuro.
>
[**<-Anterior**](../../README.md)
