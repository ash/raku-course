---
title: 'Quiz — Bestanden verwijderen'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
mkdir 'data';
spurt 'data/x.txt', 'hi';
rmdir 'data';
say 'data'.IO.e;
```

{:.quiz}
1 | True
0 | False
0 | een fout
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`rmdir` verwijdert alleen een **lege** map. Hier bevat `data` nog steeds `x.txt`, dus verwijdert `rmdir` niets en laat hij de map staan. `.e` meldt daarom nog steeds `True`. Om de map te verwijderen zou je eerst haar inhoud weghalen (bijvoorbeeld met `.unlink for 'data'.IO.dir`) en daarna `rmdir` aanroepen.

</div>

{% include nav.html %}
