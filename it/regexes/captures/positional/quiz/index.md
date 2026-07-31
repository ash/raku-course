---
title: Quiz — Catture posizionali
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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

Le due coppie di parentesi catturano in `$0` e `$1`, numerate da zero. La prima cattura `ab`, la seconda cattura `cd`, quindi `$1` è `｢cd｣`.

</div>

{% include nav.html %}
