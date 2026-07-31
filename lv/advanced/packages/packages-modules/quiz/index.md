---
title: Viktorīna — Pakotnes
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
module M {
    my $x = 5;
}

say $M::x.defined;
```

{:.quiz}
1 | False
0 | True
0 | 5
0 | Kļūda

{% include quiz.html %}

<div class="extended-explanation">

`$x` ir deklarēts ar `my`, tāpēc tas ir leksisks un nekad nenonāk `M` vārdtelpā. Ceļš `$M::x` tāpēc neatrod neko — nedefinētu vērtību —, un `.defined` atgriež `False`. Tikai `our` mainīgais būtu sasniedzams šādā veidā.

</div>

{% include nav.html %}
