---
title: 'Viktorīna — `gather`'
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my @r = gather for 1..6 {
    take $_ if $_ %% 3;
};

say @r;
```

{:.quiz}
1 | [3 6]
0 | [1 2 3 4 5 6]
0 | [3]
0 | []

{% include quiz.html %}

<div class="extended-explanation">

`gather` savāc tikai tās vērtības, kurām `take` patiešām izsaukts. Nosacījums `$_ %% 3` ir patiess tikai `3` un `6`, tāpēc tiek paņemtas tikai šīs divas, dodot `[3 6]`.

</div>

{% include nav.html %}
