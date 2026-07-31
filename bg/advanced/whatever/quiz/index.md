---
title: Тест — Звездата Whatever
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my @a = 5, 6, 7, 8, 9;
say @a[*-2];
```

{:.quiz}
1 | 8
0 | 7
0 | 9
0 | 3

{% include quiz.html %}

<div class="extended-explanation">

В индекс, голата `*` замества броя на елементите — тук `5`. Така `*-2` е индекс `3`, а елементът на индекс `3` (броейки от нула) е `8`.

</div>

{% include nav.html %}
