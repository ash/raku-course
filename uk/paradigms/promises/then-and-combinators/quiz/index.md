---
title: 'Тест — Поєднання обіцянок'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
my @jobs = (start { 2 }), (start { 3 });
say [*] await @jobs;
```

{:.quiz}
0 | 5
1 | 6
0 | (2 3)
0 | 23

{% include quiz.html %}

<div class="extended-explanation">

`await @jobs` повертає результати двох обіцянок по порядку — `(2, 3)`. Метаоператор згортки `[*]` перемножує їх, даючи `6`.

</div>

{% include nav.html %}
