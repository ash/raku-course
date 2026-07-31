---
title: 'Solution: Leer la constante'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución a la tarea.

## Código

El programa, `read-pi.raku`:

```raku
need Circle;

say $Circle::pi;
```

🦋 Puedes encontrar ambos archivos fuente en el directorio [exercises/advanced/modules-basics/read-the-constant](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/read-the-constant).

## Salida

```console
$ raku -I. read-pi.raku
3.14
```

## Comentarios

1. `need Circle` carga el módulo pero no importa ningún nombre, por lo que un simple `$pi` no sería reconocido.

1. La variable `our` se accede a través del nombre del módulo, escrita como `$Circle::pi`.

{% include nav.html %}
