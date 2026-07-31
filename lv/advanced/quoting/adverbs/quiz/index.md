---
title: Viktorīna — Citēšanas apzīmētāji
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my $price = 5;
say qq:!s{costs $price};
```

{:.quiz}
0 | costs 5
1 | costs $price
0 | costs
0 | costs {5}

{% include quiz.html %}

<div class="extended-explanation">

`qq` parasti interpolē skalāros, bet adverbs ar `!` izslēdz funkciju. Šeit `:!s` atspējo skalāro interpolēšanu, tāpēc `$price` tiek atstāts tieši tā, kā uzrakstīts, nevis aizstāts ar `5`.

</div>

{% include nav.html %}
