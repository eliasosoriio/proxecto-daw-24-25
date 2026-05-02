# Proxecto fin de ciclo

- [Proxecto fin de ciclo](#proxecto-fin-de-ciclo)
  - [Taboleiro do proyecto](#taboleiro-do-proyecto)
  - [Descrición](#descrición)
  - [Instalación / Posta en marcha](#instalación--posta-en-marcha)
  - [Uso](#uso)
  - [Sobre o autor](#sobre-o-autor)
  - [Licenza](#licenza)
  - [Índice](#índice)
  - [Guía de contribución](#guía-de-contribución)
  - [Links](#links)


## Taboleiro do proyecto

Actualmente _Fideplus_ se encuentra finalizado y en fase BETA. [Acceder](https://lamarta.es)

## Descrición

El sistema *Fideplus* se encarga de dar una oportunidad al comercio local para disponer de una plataforma web sencilla, fácil, moderna y a la altura del momento en el que estamos.

¿Cómo se consigue esto? Lo primero, dando un diseño único y que realmente represente la identidad de la marca. Una página en la que el usuario sienta que pertenece al negocio. Además, todo esto acompañado del sistema de fidelización.

Esta aplicación consigue aumentar el número de clientes que vuelven repetidamente al local. Mantener la clientela genera más ingresos para el negocio que seguir buscando nueva.

Fideplus gestiona unas recompensas que el usuario puede observar desde su panel, además de sus puntos como afiliado. Un euro gastado en el negocio equivale a cien puntos. El administrador o gerente del local dispone de su propio panel en el que se podrán añadir, modificar y editar esas recompensas. Otra de las opciones es buscar a un afiliado accediendo a su información y saldo. Desde esta pantalla se pueden añadir más puntos a un usuario o canjear una recompensa.

La parte visual, la que todos vemos (frontend), está desarrollada en React y la parte del servidor (backend), que es la API y la base de datos (MySQL), está desarrollada en PHP crudo y SQL. Toda esta aplicación está alojada en IONOS.

## Instalación / Posta en marcha

Lo primero es clonar o descargar el repositorio de GitHub. Una vez hecho, abrimos la carpeta _lamarta.es_ donde se encuentra el frontend y realizamos un _npm install_ desde la terminal para instalar las dependencias. Cuando haya finalizado la instalación, podremos hacer un _npm run dev_ para desplegar en local.

El último paso sería acceder a la carpeta _api.lamarta.es_, copiar _.env.example_ como _.env_ y definir las credenciales del entorno. Después se levantan los contenedores con _docker-compose up -d_, se importa el esquema [api.lamarta.es/db/schema.sql](api.lamarta.es/db/schema.sql) y se crea el primer administrador con _docker-compose exec php php scripts/create_admin.php --name="Admin" --surname="Inicial" --email="admin@local.test" --password="Cambia-Esta-Clave123!"_.

## Uso

El administrador dispone de un panel en el que puede visualizar toda la información básica y necesaria. Las recompensas se pueden editar y borrar desde esta misma pantalla. Se pueden visualizar los diez usuarios con más puntos y acceder al perfil de estos desde la pantalla. También habrá unos botones con el resto de acciones, como buscar un usuario o añadir una recompensa. En el perfil de un usuario podremos añadir puntos o canjear una recompensa.

El usuario/afiliado dispone de un panel en el que puede revisar su información principal. Esta información sería su número de afiliado y los puntos que actualmente tiene. También podrá visualizar las recompensas disponibles en el local y sus últimas diez transacciones en este mismo.

Si no eres afiliado puedes registrarte introduciendo el codigo de acceso facilitado por el negocio y rellenando el formulario.

## Sobre o autor

Soy Elías Osorio Pouseu, estudiante de 2º de Desarrollo de Aplicaciones Web en el IES Armando Cotarelo Valledor. Domino tecnologías como HTML, CSS, JS, PHP, SQL, Figma y un poco de React.

Me considero alguien que busca la simplicidad y bastante perfeccionista, sobre todo en el diseño y en lo que ve la gente. Cuando mi hermano me habló sobre hacer la página y posteriormente el sistema, tenía claro que una de las cosas principales que quería era representar la marca de una manera única. Que la gente se acuerde de la página de Lamarta.

El comercio local aún no está completamente digitalizado ni con un sistema de fidelización. Además, hay comercio que ya dispone de una página, pero que no define ni ensalza la imagen de la marca ni deja huella en los clientes.

Cualquier consulta se puede realizar al siguiente correo: 2004eliasosorio@gmail.com

## Licenza

Se utiliza [GNU General Public License v3.0](./LICENSE). Esta, permite el uso, modificación, copia y distribución del software, incluso con fines comerciales, siempre que se mantenga el código abierto y se distribuyan también las modificaciones bajo la misma licencia.

## Índice

1. [Anteproyecto](doc/templates/1_Anteproxecto.md)
2. [Análise](doc/templates/2_Analise.md)
3. [Deseño](doc/templates/3_Deseño.md)
4. [Codificación e probas](doc/templates/4_Codificacion_e_probas.md)
5. [Implantación](doc/templates/5_Implantación.md)
6. [Referencias](doc/templates/6_Referencias.md)
7. [Incidencias](doc/templates/7_Incidencias.md)

## Guía de contribución

Puedes contribuir a este proyecto de varias formas:

- Desarrollando nuevas funcionalidades.
- Corrigiendo errores.
- Optimizando el código.

Si te decides a hacerlo haz un fork del repositorio. Después, crea una rama específica para tus cambios. Realiza las modificaciones necesarias y realiza pruebas para asegurarte de que no fastidie el resto del proyecto. Envía una pull request explicando claramente las mejoras o correcciones realizadas.

## Links

- [HTML (MDN)](https://developer.mozilla.org/es/docs/Web/HTML)
- [CSS (MDN)](https://developer.mozilla.org/es/docs/Web/CSS)
- [JavaScript (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [React](https://reactjs.org/docs/getting-started.html)
- [SQL (W3Schools)](https://www.w3schools.com/sql/)
- [PHP](https://www.php.net/manual/es/)
- [Vercel](https://vercel.com/)
- [IONOS](https://www.ionos.es/)
- [phpMyAdmin](https://www.phpmyadmin.net/)

Estos enlaces pertenecen al software principal utilizado. Para ver más, mira en la sección de [referencias](./doc/templates/6_Referencias.md).
