---
title: 'Solución: Un token con nombre'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my regex word { \w+ }

if 'hello world' ~~ / <word> / {
    say $<word>;
}
```

🦋 Puedes encontrar el código fuente en el archivo [named-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/named-token.raku).

## Salida

```
｢hello｣
```

## Comentarios

1. `my regex word { \w+ }` le da un nombre al patrón para que se pueda reutilizar.

1. Escribir `<word>` en el patrón lo empareja y captura el resultado bajo ese mismo nombre, accesible como `$<word>`. La primera serie de caracteres de palabra es `hello`.

{% include nav.html %}
