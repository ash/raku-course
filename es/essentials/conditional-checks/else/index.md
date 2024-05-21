---
title: El bloque else
---

{% include menu.html %}

Un bloque `if` puede ser seguido por un bloque `else`, que se ejecuta cuando la condición no se cumple.

```raku
my $t = 36.6;
if 35.5 < $t < 37.5 {
    say 'You are fine.';
}
else {
    say 'Call a doctor, maybe?';
}
```

El bloque `else` no puede ser usado por sí solo (hay una mejor alternativa llamada [`unless`](../unless), que será introducida en un momento).

{% include nav.html %}