---
title: Viktorīna — Slēgumi
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

Atgrieztā apakšprogramma noslēdzas pār `$total`, tāpēc visi trīs izsaukumi dala vienu un to pašu mainīgo. Pirmie divi izsaukumi to aizved līdz `30`; trešais pieskaita `5` un izdrukā uzkrāto summu `35`.

</div>

{% include nav.html %}
