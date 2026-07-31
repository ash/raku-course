---
title: 'Solution: Volcar una variable tipada'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my Int $n = 42;
dd $n;
```

🦋 Puedes encontrar el código fuente en el archivo [dump-typed.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-typed.raku).

## Salida

```
Int $n = 42
```

## Comentarios

1. Como la variable tiene un tipo declarado, `dd` imprime ese tipo antes del nombre: `Int $n = 42`.

1. Una variable sin tipo se volcaría simplemente como `$n = 42`, sin el tipo.

{% include nav.html %}
