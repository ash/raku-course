---
title: 'Solución: Un robot que camina'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Robot {
    has $.position is rw = 0;

    method move($steps = 1) {
        $.position += $steps;
    }
}

my $r = Robot.new;
$r.move(5);
$r.move;
$r.move(2);

say $r.position;
```

🦋 Puedes encontrar el código fuente en el archivo [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/bank-account.raku).

## Salida

```
8
```

## Comentarios

1. El atributo `position` es `is rw` para que el método pueda cambiarlo, y su valor por defecto es `0` para que un robot recién creado arranque en el origen.

1. El método `move` da a su parámetro un valor por defecto, `$steps = 1`. La llamada escueta `$r.move` avanza por tanto un paso, mientras que `$r.move(5)` y `$r.move(2)` avanzan la cantidad indicada. Las tres llamadas suman `5 + 1 + 2`, así que la posición final es `8`.

{% include nav.html %}
