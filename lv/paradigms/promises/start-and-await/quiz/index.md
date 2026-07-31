---
title: Viktorīna — Solījumi
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my $p = start { 100 / 4 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 100
1 | 25
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`start` izpilda bloku fonā un atgriež solījumu. `await` to sagaida un atgriež bloka rezultātu `100 / 4`, kas ir `25`.

</div>

{% include nav.html %}
