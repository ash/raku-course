---
title: Quiz — Itemcontext
translations_gpt: 'Quiz — Item context'
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

De `$( … )`-contextomzetter dwingt itemcontext af, zodat de array als een enkele waarde wordt behandeld in plaats van als een lijst van elementen. De `for`-lus ziet daarom één item en voert zijn body slechts één keer uit, waardoor `$n` op `1` blijft. Zonder `$( )` zou de lus drie keer worden doorlopen.

</div>

{% include nav.html %}
