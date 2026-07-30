---
title: 'Quiz — Supplies'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

De tap draait één keer voor elke waarde die de supply uitzendt. Elke keer zet hij de waarde in hoofdletters en plakt haar achter `$out`, dus worden `a`, `b`, `c` `A`, `B`, `C`, samengevoegd tot `ABC`. Het blok reageert op de hele stroom, niet alleen op de laatste waarde — en daarom is het antwoord niet eenvoudigweg `C`.

</div>

{% include nav.html %}
