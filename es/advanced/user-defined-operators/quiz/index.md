---
title: Quiz — Definir un operador
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
sub infix:<times>($a, $b) { $a * $b }

say 6 times 7;
```

{:.quiz}
1 | 42
0 | 67
0 | times
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

`infix:<times>` define un nuevo operador que se escribe entre sus dos operandos. Su cuerpo los multiplica, así que `6 times 7` se evalúa como `42`; un operador es simplemente una subrutina con un nombre especial.

</div>

{% include nav.html %}
