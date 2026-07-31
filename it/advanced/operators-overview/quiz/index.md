---
title: Quiz — Precedenza
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
say 2 * 3 ** 2;
```

{:.quiz}
1 | 18
0 | 36
0 | 12
0 | 81

{% include quiz.html %}

<div class="extended-explanation">

`**` ha una precedenza più alta di `*`, quindi l'elevamento a potenza avviene per primo: `3 ** 2` è `9`, e poi `2 * 9` è `18`. Leggendo da sinistra a destra come `(2 * 3) ** 2` si otterrebbe la risposta sbagliata, `36`.

</div>

{% include nav.html %}
