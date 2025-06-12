# INCIDENCIAS E TAREFAS
- [INCIDENCIAS E TAREFAS](#incidencias-e-tarefas)
  - [1- Incidencias](#1--incidencias)
  - [2- Tarefas](#2--tarefas)

## 1- Incidencias

Un problema que surgió fue al cambiar entre secciones, por ejemplo, de la carta al blog. Si habías scrolleado hacia abajo y abres la otra sección, se mostraba abajo también, lo que quiere decir que mantiene la posición del scroll. Para solucionarlo, creé un componente que al cargar llevase al principio de la página con una transición. Aquí aprendí cómo usar un hook nuevo, [useEffects](https://www.w3schools.com/react/react_useeffect.asp). Con él, una vez que el componente está cargado, realiza el scroll hacia arriba. La transición fue gracias a un ejemplo que encontré en un foro buscando cómo funcionaba el [window.scrollTo()](https://es.stackoverflow.com/questions/549391/scrollto-sobre-un-div).

En el diseño para escritorio de los paneles, no contemplaba cuando había muchos y lo solucioné agregando una altura fija y un scroll. El resto de incidencias que pude tener eran correcciones simples tras añadir alguna funcionalidad, siendo detalles a pulir lo que se cambiaba o mejor tratamiento de avisos de errores mediante la librería.

## 2- Tarefas

[**<-Anterior**](../../README.md)
