---
title: Quiz — hyper
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
say (1..4).hyper.map(* ** 2);
```

{:.quiz}
0 | (16 9 4 1)
1 | (1 4 9 16)
0 | 30
0 | (1 2 3 4)

{% include quiz.html %}

<div class="extended-explanation">

`.hyper` reparte el `map` entre hilos pero mantiene los resultados en su orden original, así que se comporta igual que un `map` corriente: elevar cada elemento al cuadrado da `(1 4 9 16)`.

</div>

{% include nav.html %}
