---
title: Quiz — L'operatore `...`
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
say 1, 3, 9 ... 81;
```

{:.quiz}
1 | (1 3 9 27 81)
0 | (1 3 9 81)
0 | (1 3 5 7 ... 81)
0 | (3 9 27)

{% include quiz.html %}

<div class="extended-explanation">

Con *tre* valori iniziali, `...` esamina il rapporto tra di essi: `1, 3, 9` triplicano ciascuno, quindi continua geometricamente come `27, 81`. (Due valori iniziali imposterebbero invece un passo aritmetico.)

</div>

{% include nav.html %}
