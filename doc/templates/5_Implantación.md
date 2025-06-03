# FASE DE IMPLANTACIÓN

- [FASE DE IMPLANTACIÓN](#fase-de-implantación)
  - [1- Manual técnico](#1--manual-técnico)
    - [1.1- Instalación](#11--instalación)
    - [1.2- Administración do sistema](#12--administración-do-sistema)
  - [2- Manual de usuario](#2--manual-de-usuario)
  - [3- Melloras futuras](#3--melloras-futuras)

## 1- Manual técnico

### 1.1- Instalación

Requisitos mínimos de hardware recomendados:

- Un equipo con al menos 8 GB de RAM.
- Espacio libre en el disco duro para los contenedores y la base de datos.
- Conexión a internet para la instalación de dependencias.

Software necesario:

- [Git](https://git-scm.com/) para clonar el repositorio del proyecto.
- [Node.js](https://nodejs.org/) para la instalación de dependencias _npm install_ y ejecución del front _npm run dev_.
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/) para levantar los contenedores del entorno (api y base de datos).
- Navegador moderno y actualizado para acceder a la interfaz del frontend.

Carga inicial de datos:

Una vez levantados los contenedores, se accede a phpMyAdmin en el puerto 8000 y se importa el [dump de la base de datos](../../api.lamarta.es/phpmyadmin-dump-producto_fideplus_lamarta.sql).

Usuarios:

Hay dos tipos de usuarios:

- **Administrador:** Tiene acceso a un panel para gestionar a los afiliados y a las recompensas.
- **Afiliado:** Puede ver los puntos que va acumulando y las recompensas disponibles.

Las cuentas que vienen en el dump, tienen como contraseña Abc1234.. las de afiliado y Admin1234.. la de administrador.

Esquema de despliegue local final:

- Frontend (React).
- Backend (API) desplegado en Docker.
- Base de datos (MySQL) en Docker también.



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
