---
title: 'Solución: Coincidencia sin importar mayúsculas'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say 'Hello WORLD' ~~ /:i world/;
```

🦋 Puedes encontrar el código fuente en el archivo [case-blind.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/case-blind.raku).

## Salida

```
｢WORLD｣
```

## Comentarios

1. El adverbio `:i` hace que la coincidencia ignore la diferencia entre mayúsculas y minúsculas.

1. El patrón en minúsculas empareja por tanto el `WORLD` en mayúsculas.

{% include nav.html %}
