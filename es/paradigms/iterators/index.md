---
title: Iteradores
translations_gpt:
---

{% include menu.html %}

La sección anterior construía secuencias con `gather` y `take`. Esta baja un nivel, al mecanismo que en realidad entrega los valores: el _iterador_.

Un iterador es el pequeño objeto que hay detrás de toda lista, todo rango y toda secuencia perezosa de Raku. Sabe hacer una sola cosa — producir el valor **siguiente** — y nada más. Siempre que escribes un bucle `for` o llamas a `map`, Raku va pidiendo calladamente a un iterador un valor cada vez, hasta que no quedan más. Esta sección muestra ese protocolo directamente: cómo extraer valores de un iterador a mano y cómo escribir un iterador propio.

{% include nav.html %}
