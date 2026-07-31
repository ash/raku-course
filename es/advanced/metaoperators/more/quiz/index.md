---
title: Quiz — Hyper y cross
translations_gpt:
---

{% include menu.html %}

Que imprime el siguiente programa?

```raku
say (1, 2, 3) »+» 10;
```

{:.quiz}
1 | (11 12 13)
0 | (11 2 3)
0 | 16
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

El meta-operador hyper `>>+>>` aplica `+` a cada elemento. Con un único valor `10` a la derecha, ese valor se extiende a toda la lista, por lo que cada elemento aumenta en `10`: `(11 12 13)`. (Una reducción `[+]` en cambio colapsaría la lista a la suma única `6`.)

</div>

{% include nav.html %}
