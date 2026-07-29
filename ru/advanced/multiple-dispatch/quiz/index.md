---
title: Тест — Диспетчеризация с `where`
translations_gpt:
---

{% include menu.html %}

Что напечатает следующая программа?

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

`4` удовлетворяет условию `where $n %% 2`, поэтому выбирается более конкретный кандидат и печатается `even`. Кандидат с простым `Int` является перехватчиком для всего, что не прошло условие.

</div>

{% include nav.html %}
