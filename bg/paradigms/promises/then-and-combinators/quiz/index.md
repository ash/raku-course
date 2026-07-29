---
title: 'Тест — Съчетаване на обещания'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

`await @jobs` връща резултатите на двете обещания по ред — `(2, 3)`. Метаоператорът за свиване `[*]` ги умножава и дава `6`.

</div>

{% include nav.html %}
