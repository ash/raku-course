---
title: Quiz — Adverbia quotationis
---

{% include menu.html %}

Quid sequens programma imprimit?

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

`qq` normaliter variabiles scalares interpolat, sed adverbium cum `!` scriptum proprietatem *exstinguit*. Hic `:!s` interpolationem scalarem inactivam facit, itaque `$price` exacte ut scriptum est relinquitur, non per `5` substituitur.

</div>

{% include nav.html %}
