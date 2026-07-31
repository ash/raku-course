---
title: Quiz — Paquetes
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
module M {
    my $x = 5;
}

say $M::x.defined;
```

{:.quiz}
1 | False
0 | True
0 | 5
0 | Un error

{% include quiz.html %}

<div class="extended-explanation">

`$x` se declara con `my`, por lo que es léxica y nunca entra en el espacio de nombres `M`. La ruta `$M::x` por lo tanto no encuentra nada — un valor indefinido — y `.defined` es `False`. Solo una variable `our` sería accesible de esta manera.

</div>

{% include nav.html %}
