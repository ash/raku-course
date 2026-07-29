---
title: Тест — Диспечеризация с `where`
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
multi sub f(Int $n where $n %% 2) { say 'even' }
multi sub f(Int $n)               { say 'odd' }

f(4);
```

{:.quiz}
1 | even
0 | odd
0 | both
0 | nothing

{% include quiz.html %}

<div class="extended-explanation">

`4` удовлетворява условието `where $n %% 2`, така че по-специфичният кандидат е избран и се отпечатва `even`. Обикновеният `Int` кандидат е уловителят за всичко, което не отговаря на условието.

</div>

{% include nav.html %}
