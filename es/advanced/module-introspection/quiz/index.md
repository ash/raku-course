---
title: Quiz — El Stash
---

{% include menu.html %}

El módulo `Greeting` exporta `hello` y define `our $version`. ¿Que devuelve `Greeting::.keys.sort`?

{:.quiz}
1 | ($versión EXPORT)
0 | ($versión)
0 | ($versión &hello)
0 | (hello versión)

{% include quiz.html %}

<div class="extended-explanation">

`$version` es la variable `our` del módulo, listada con su sigilo. `EXPORT` es el paquete que Raku agrega automáticamente para contener los nombres marcados con `is export`, por lo que el `hello` exportado aparece allí en lugar de como un nombre propio del paquete.

</div>

{% include nav.html %}
