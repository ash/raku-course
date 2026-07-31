---
title: Emparejamiento voraz y frugal
translations_gpt:
---

{% include menu.html %}

Por omisión, un cuantificador es _voraz_: empareja todo lo que puede sin impedir que el resto del patrón funcione. Considera emparejar desde el primer `<` hasta un `>`:

```raku
say '<a><b>' ~~ / '<' .+ '>' /; # ｢<a><b>｣
```

El `.+` se tragó todo lo que pudo, hasta el **último** `>`, así que la coincidencia atraviesa los dos pares de corchetes.

Para hacer frugal un cuantificador (también llamado _perezoso_ o _no voraz_), añádele un `?` detrás. Un cuantificador frugal empareja lo **menos** posible:

```raku
say '<a><b>' ~~ / '<' .+? '>' /; # ｢<a>｣
```

Ahora `.+?` se detiene en el **primer** `>`, así que solo coincide la primera pieza entre corchetes.

El sufijo `?` funciona sobre cualquier cuantificador: `*?` y `**?` también son frugales. Las versiones voraz y frugal emparejan la misma clase de texto; solo se diferencian en cuánto toman cuando hay elección.

{% include nav.html %}
