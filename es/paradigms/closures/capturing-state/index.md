---
title: Clausuras
translations_gpt:
---

{% include menu.html %}

Una _clausura_ es una subrutina que captura variables del ámbito en el que se definió y las mantiene vivas incluso después de que ese ámbito haya terminado. Esto le da a la subrutina un estado privado y duradero propio.

El ejemplo clásico es un contador:

```raku
sub make-counter {
    my $n = 0;
    return sub { ++$n };
}

my &count = make-counter;
say count(); # 1
say count(); # 2
say count(); # 3
```

La variable `$n` se declara dentro de `make-counter`. La subrutina devuelta se refiere a `$n`, así que se cierra sobre ella: cada llamada a `count` incrementa y devuelve el **mismo** `$n`, aunque `make-counter` terminara hace rato.

Cada llamada a `make-counter` crea un `$n` nuevo, así que los contadores distintos son independientes:

```raku
my &a = make-counter;
my &b = make-counter;
say a(); # 1
say a(); # 2
say b(); # 1
```

Las clausuras permiten que una función lleve consigo un estado sin una variable global y sin un objeto. Son la manera que tiene la programación funcional de recordar algo entre llamadas.

{% include nav.html %}
