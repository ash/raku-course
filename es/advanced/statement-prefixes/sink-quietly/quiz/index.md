---
title: Quiz — Prefijos de sentencia
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
my $v;
quietly {
    say $v + 10;
}
```

{:.quiz}
0 | A warning, then 10
1 | 10
0 | Nil
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Sumar `10` al `$v` indefinido lo trata como `0`, dando `10`. Normalmente esto también imprimiría una advertencia de "valor no inicializado", pero el prefijo `quietly` la suprime, así que solo se imprime `10`.

</div>

{% include nav.html %}
