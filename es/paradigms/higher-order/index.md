---
title: Funciones de orden superior
translations_gpt:
---

{% include menu.html %}

En Raku, una subrutina es un valor ordinario: puedes guardarla en una variable, pasarla a otra subrutina y devolverla como resultado. Una subrutina que **recibe** o **devuelve** otra subrutina se llama _función de orden superior_, y es el corazón de la programación funcional.

Ya has usado funciones de orden superior sin nombrarlas: `map`, `grep` y `sort` reciben todas un bloque de código como argumento. Esta sección muestra cómo escribir las tuyas.

Estos métodos que reciben bloques son también un sitio natural para la forma de la _llamada con dos puntos_, que te permite quitar los paréntesis: `(1..10).grep: * %% 2` en lugar de `(1..10).grep(* %% 2)`. Se presenta en [Llamar con dos puntos](/es/advanced/colon-calls), y el atajo `*` que usa es la [estrella Whatever](/es/advanced/whatever).

{% include nav.html %}
