---
title: 'Тест — Затваряния'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

Върнатата подпрограма се затваря върху `$total`, така че и трите извиквания споделят една и съща променлива. Първите две я довеждат до `30`; третото добавя `5` и отпечатва текущата сума — `35`.

</div>

{% include nav.html %}
