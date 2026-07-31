---
title: Viktorīna — Slurpy parametri
translations_gpt:
---

{% include menu.html %}

Ko izvada sekojosa programma?

```raku
sub f($first, *@rest) {
    say @rest.elems;
}

f('a', 'b', 'c');
```

{:.quiz}
1 | 2
0 | 3
0 | 1
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Fiksatie parametri tiek aizpilditi pirms uzsucosa parametra. `$first` sanem `'a'`, un tikai divi atlikusie argumenti `'b'` un `'c'` nonak `@rest`, tapec ta `.elems` ir `2`.

</div>

{% include nav.html %}
