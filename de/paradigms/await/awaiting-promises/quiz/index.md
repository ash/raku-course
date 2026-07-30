---
title: 'Quiz — await'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

`await` wartet auf das Ende des einen Promise und liefert sein Ergebnis. Der Block berechnet `8 * 8`, `await $p` ist also `64`.

</div>

{% include nav.html %}
