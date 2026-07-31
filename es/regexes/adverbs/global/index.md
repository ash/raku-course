---
title: Emparejamiento global
translations_gpt:
---

{% include menu.html %}

Por omisión, un regex encuentra solo la **primera** coincidencia. El adverbio `:g` (abreviatura de `:global`) encuentra **todas** las coincidencias de la cadena. Se escribe sobre el operador `m///`:

```raku
my @all = 'a1b2c3' ~~ m:g/\d/;
say @all;       # [｢1｣ ｢2｣ ｢3｣]
say @all.elems; # 3
```

Con `:g`, el resultado se comporta como una lista de objetos de coincidencia, uno por cada sitio donde se encontró el patrón. Puedes contarlos, recorrerlos o convertir cada uno en cadena:

```raku
my @numbers = 'a12 b3 c456' ~~ m:g/\d+/;
say @numbers.map(*.Str).join(', '); # 12, 3, 456
```

Aquí `\d+` emparejó tres series de dígitos distintas, y `:g` las recogió todas.

El emparejamiento global es la herramienta natural siempre que la pregunta es «cuántos…» o «todos los…» en lugar de «¿hay algún…?».

{% include nav.html %}
