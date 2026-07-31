---
title: 'Solución: Sumar con pull-one'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $it = (3, 7, 5).iterator;
my $sum = 0;

loop {
    my $v := $it.pull-one;
    last if $v =:= IterationEnd;
    $sum += $v;
}

say $sum;
```

🦋 Puedes encontrar el código fuente en el archivo [sum-with-pull-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/iterators/sum-with-pull-one.raku).

## Salida

```
15
```

## Comentarios

1. `.iterator` da la vista por extracción de la lista, y cada `pull-one` devuelve el número siguiente.

1. El valor se **liga** con `:=`, no se asigna, para que `$v =:= IterationEnd` detecte correctamente el final: un `=` de asignación compararía el contenedor en lugar del valor. El bucle suma `3`, `7` y `5`, después encuentra `IterationEnd` y se detiene, dejando `15`.

{% include nav.html %}
