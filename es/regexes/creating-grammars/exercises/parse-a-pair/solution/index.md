---
title: 'Solución: Analice un nombre completo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar FullName {
    token TOP   { <first> ' ' <last> }
    token first { \w+ }
    token last  { \w+ }
}

say FullName.parse('Grace Hopper')<last>;
```

🦋 Puedes encontrar el código fuente en el archivo [parse-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-pair.raku).

## Salida

```
｢Hopper｣
```

## Comentarios

1. `TOP` describe el nombre entero; `first` y `last` describen sus partes, con un espacio literal en medio.

1. Tras el análisis, cada token es una captura con nombre, así que el apellido se lee como `<last>` sobre el objeto de coincidencia.

{% include nav.html %}
