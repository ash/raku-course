---
title: Quiz — Quantificatori
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
say 'aaaa' ~~ / a ** 2..3 /;
```

{:.quiz}
0 | ｢aa｣
1 | ｢aaa｣
0 | ｢aaaa｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Il quantificatore `** 2..3` ammette due o tre ripetizioni e, essendo goloso, ne prende quante più può: tre. La quarta `a` resta fuori dalla corrispondenza.

</div>

{% include nav.html %}
