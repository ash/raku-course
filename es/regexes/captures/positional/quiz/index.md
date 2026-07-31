---
title: Quiz — Capturas posicionales
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
if 'ab-cd' ~~ / (\w+) '-' (\w+) / {
    say $1;
}
```

{:.quiz}
0 | ｢ab｣
1 | ｢cd｣
0 | ｢ab-cd｣
0 | ｢-｣

{% include quiz.html %}

<div class="extended-explanation">

Los dos pares de paréntesis capturan en `$0` y `$1`, numerados desde cero. El primero captura `ab` y el segundo captura `cd`, así que `$1` es `｢cd｣`.

</div>

{% include nav.html %}
