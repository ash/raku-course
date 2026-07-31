---
title: 'Solution: ¿Existe la clave?'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

🦋 Encuentra el código fuente en el archivo [check-exists.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/check-exists.raku).

## Salida

```
False
```

## Comentarios

1. El adverbio `:exists` devuelve si la clave está presente, sin obtener el valor.

1. El hash no tiene la clave `z`, por lo que devuelve `False` — y, a diferencia de una consulta ordinaria, no crea la clave como efecto secundario.

{% include nav.html %}
