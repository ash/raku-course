---
title: Viktorīna — Vienuma konteksts
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my @a = 1, 2, 3;
my $n = 0;
$n++ for $(@a);
say $n;
```

{:.quiz}
0 | 3
1 | 1
0 | 0
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

`$( … )` kontekstualizators piespiedu kārtā uzliek elementa kontekstu, tāpēc masīvs tiek uzskatīts par vienu vērtību, nevis elementu sarakstu. `for` cikls tāpēc redz vienu elementu un izpilda savu ķermeni tikai vienu reizi, atstājot `$n` vērtībā `1`. Bez `$( )` cikls iterētu trīs reizes.

</div>

{% include nav.html %}
