---
title: Тест — `gather`
translations_gpt:
---

{% include menu.html %}

Что напечатает следующая программа?

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

`gather` собирает только те значения, для которых был вызван `take`. Условие `$_ %% 3` истинно только для `3` и `6`, поэтому берутся только эти два значения, и результат — `[3 6]`.

</div>

{% include nav.html %}
