---
title: 'Quiz — await'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my $p = start { 8 * 8 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 8
1 | 64
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`await` wacht tot de enkele promise klaar is en geeft haar resultaat terug. Het blok berekent `8 * 8`, dus `await $p` is `64`.

</div>

{% include nav.html %}
