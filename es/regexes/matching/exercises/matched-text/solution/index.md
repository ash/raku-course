---
title: 'Solución: El texto coincidente'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
'database' ~~ /base/;
say $/.Str;
```

🦋 Puedes encontrar el código fuente en el archivo [matched-text.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/matched-text.raku).

## Salida

```
base
```

## Comentarios

1. Todo emparejamiento inteligente guarda su resultado en la variable especial de coincidencia `$/`, así que no hace falta asignarlo a una variable propia.

1. El objeto de coincidencia contiene el texto coincidente; llamar a `.Str` sobre `$/` devuelve ese texto como cadena ordinaria. Imprimir directamente el objeto de coincidencia habría mostrado `｢base｣`.

{% include nav.html %}
