---
title: 'Solución: Una etiqueta modificable'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Label {
    has $.text is rw;
}

my $l = Label.new(text => 'draft');
$l.text ~= ' (revised)';
say $l.text;
```

🦋 Puedes encontrar el código fuente en el archivo [changeable-label.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/changeable-label.raku).

## Salida

```
draft (revised)
```

## Comentarios

1. El rasgo `is rw` hace que el accesor devuelva un contenedor escribible, de modo que puede aparecer a la izquierda de una asignación.

1. Precisamente por ser escribible, el operador compuesto `~=` también funciona sobre él: `$l.text ~= ' (revised)'` lee el texto actual, concatena el sufijo y guarda el resultado de vuelta, todo a través del mismo accesor.

{% include nav.html %}
