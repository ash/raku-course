---
title: 'Quiz — Closures'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
sub make-acc {
    my $total = 0;
    return sub ($x) { $total += $x };
}

my &add = make-acc;
add(10);
add(20);
say add(5);
```

{:.quiz}
0 | 5
0 | 30
1 | 35
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

De teruggegeven subroutine sluit om `$total` heen, dus delen alle drie de aanroepen dezelfde variabele. De eerste twee aanroepen brengen die op `30`; de derde telt er `5` bij op en drukt de lopende som af, `35`.

</div>

{% include nav.html %}
