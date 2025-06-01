# FASE DE CODIFICACIÓN E PROBAS

- [FASE DE CODIFICACIÓN E PROBAS](#fase-de-codificación-e-probas)
  - [1- Codificación](#1--codificación)
  - [2- Prototipos](#2--prototipos)
  - [3- Innovación](#3--innovación)
  - [4- Probas](#4--probas)


## 1- Codificación

La carpeta que contiene el código del frontend es [lamarta.es](../../lamarta.es/) y la del backend [api.lamarta.es](../../api.lamarta.es/). 

Al comienzo del desarrollo de la página, en la sección de incio, blog, conócenos, carta y contacto no hubo apenas cambios y es igual al prototipo. El menú desplegable y de la cabecera requirió informarse sobre [como utilizar las rutas en React](https://www.w3schools.com/react/react_router.asp). 

Un nuevo problema que surgió fue al cambiar entre secciones, por ejemplo, de la carta al blog. Si habías scrolleado hacia abajo y abres la otra sección, se mostraba abajo también, lo que quiere decir que mantiene la posición del scroll. Para solucionarlo, creé un componente que al cargar llevase al principio de la página con una transición. Aquí aprendí cómo usar un hook nuevo, [useEffects](https://www.w3schools.com/react/react_useeffect.asp). Con él, una vez que el componente está cargado, realiza el scroll hacia arriba. La transición fue gracias a un ejemplo que encontré en un foro buscando cómo funcionaba el [window.scrollTo()](https://es.stackoverflow.com/questions/549391/scrollto-sobre-un-div).

Las diferentes pantallas se seguían desarrollando con normalidad, cambiando pequeños detalles en comparación con el primer diseño en Figma. No hubo complicaciones más allá del tiempo que tardé en acabar todas. Los productos de la carta se almacenan en arrays y son pintados mediante Javascript, como en los ejercicios de clase.

Cuando ya estaban las pantallas, fue el momento de comenzar a privatizar las que se deben mostrar tras el login. Tras varios tipos y formas vistas, empleé un componente que vuelve una ruta privada para un rol, ya que me facilita después la comprobación de permisos y acceso. Cada vez que se cargue una página, comprobará que todo está correcto. En caso de que no, hará logout y redirigirá al login. No tuve muchas complicaciones gracias a las diferentes explicaciones y múltiples ejemplos de [esta página (4geeks)](https://4geeks.com/es/lesson/rutas-privadas-con-react-router).

En este punto, dejé a un lado el front y comencé a hacer la API para ya seguir con el login una vez acabada. A partir del modelo de una que hicimos en DWCS, comencé a desarrollar los diferentes controladores y modelos. Paralelamente, iba realizando solicitudes HTTP en Chrome de prueba con la extensión [Talend API Tester](https://chromewebstore.google.com/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm). 

En el route.php se comprueba que el dominio del que proviene la solicitud HTTP es aceptado, que el método sea válido y qué cabeceras se permiten. Los navegadores envían primero una [solicitud del tipo OPTIONS](https://www.arsys.es/blog/cors-que-es-como-funciona-y-configuracion#tree-4) de prueba para verificar la seguridad de la petición y el acceso, ya que utilizan el mecanismo [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/Guides/CORS). Este asegura que controles cuáles y desde dónde vienen las peticiones.

Para la contraseña utilicé [password_hash](https://www.php.net/manual/es/function.password-hash.php) y [password_verify](https://www.php.net/manual/es/function.password-verify.php). Al principio, iba a utilizar sha1 para encriptarla. Pero buscando, en todos los sitios hablaba de su poca seguridad, ya que permite millones de intentos por fuerza bruta en un segundo. [Con password_hash se utiliza](https://stackoverflow.com/questions/30279321/how-to-use-phps-password-hash-to-hash-and-verify-passwords) un algoritmo con el que nunca se puede repetir el hash a pesar de ser la misma contraseña. Cuando quieres comprobar si la contraseña coincide, se hace password_verify, que utiliza el hash de la base de datos para cifrar la introducida por el usuario y, si después coinciden, es que es correcta.

También tuve que emplear [PDO Transaction](https://www.phptutorial.net/php-pdo/php-pdo-transaction/), ya que realizo más de una query en algunos métodos y esto me ayuda a controlar los fallos no ejecutando las queries hasta que todas estén listas. Si están listas, se hace un commit para confirmar y, en caso de error en el catch, realizo un rollback que cancela estas sentencias.

Una vez ya casi acabada la API, volví al front para empezar con las solicitudes. La primera fue en el login, utilizando la función ajax que se aprendió durante el curso en DWCC. Una vez que ya devolvía si el login era correcto o no, me puse a hacer el resto de la misma forma. La diferencia vino a la hora de recuperar algo más que un true o false. Antes hacía una función de render, pero ahora los pinto directamente [con un map](https://es.react.dev/learn/rendering-lists) del array recibido de la API.


![BOCETO DE LA SEGURIDAD Y VALIDACIONES](../img/img_4/boceto_permisos.png)

## 2- Prototipos

Como muestra, se pueden observar dos tipos de mockup, el de móvil y el de ordenador. En ellos, se puede simular lo que un usuario puede llegar a hacer (administrador, registrado o genérico) interactuando con diferentes secciones. Al hacer clic en cada imagen, se accederá al mockup correspondiente.

Los diseños tienen partes inspiradas en dos páginas principalmente y en elementos ya creados por la agencia de imagen de LAMARTA, aunque cambiados y adaptados a lo que se busca en esta nueva web. Estas son [Rhode](https://www.rhodeskin.com/) y [818 Tequila](https://drink818.com/).

[![Mockup del diseño móvil](img_3/mockup_movil.png)](https://www.figma.com/proto/zO9sNT6X0FoEEX13Ay6Qvc/LAMARTA-TFC?node-id=1-6&starting-point-node-id=188%3A989&t=NKvcscD7Izcht6oB-1&scaling=contain&content-scaling=fixed)

[![Mockup del diseño en ordenador](img_3/mockup_ordenador.png)](https://www.figma.com/proto/zO9sNT6X0FoEEX13Ay6Qvc/LAMARTA-TFC?node-id=1-3&starting-point-node-id=1%3A3&scaling=contain&content-scaling=fixed&t=bfQ5Gvp2NxJfSmVQ-1)

## 3- Innovación

No caso de utilizar tecnoloxías diferentes ás estudadas no ciclo formativo, fai unha descrición dos retos asumidos e como se resolveron.

## 4- Probas

Deben describirse as probas realizadas e conclusión obtidas. Describir os problemas atopados e como foron solucionados.

[**<-Anterior**](../../README.md)
