---
title: Viktorīna — Supply
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my $out = '';
Supply.from-list('a', 'b', 'c').tap(-> $v { $out ~= $v.uc });
say $out;
```

{:.quiz}
1 | ABC
0 | abc
0 | a b c
0 | C

{% include quiz.html %}

<div class="extended-explanation">

Pieslēgums izpildās vienreiz par katru vērtību, ko supply izstaro. Katru reizi tas vērtību pārvērš lielajos burtos un pievieno `$out`, tāpēc `a`, `b`, `c` kļūst par `A`, `B`, `C`, savienotiem par `ABC`. Bloks reaģē uz visu straumi, ne tikai uz pēdējo vērtību — un tieši tāpēc atbilde nav vienkārši `C`.

</div>

{% include nav.html %}
