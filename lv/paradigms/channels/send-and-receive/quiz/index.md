---
title: Viktorīna — Kanāli
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my $c = Channel.new;
$c.send(10);
$c.send(20);
say $c.receive;
```

{:.quiz}
1 | 10
0 | 20
0 | 30
0 | (10 20)

{% include quiz.html %}

<div class="extended-explanation">

Kanāls ir rinda pēc principa «pirmais iekšā, pirmais ārā». `10` tika nosūtīts pirmais, tāpēc pirmais `.receive` atgriež `10`.

</div>

{% include nav.html %}
