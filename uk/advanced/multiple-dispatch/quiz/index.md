---
title: 'Тест — Диспетчеризація з `where`'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
multi sub f(Int $n where $n %% 2) { say 'even' }
multi sub f(Int $n)               { say 'odd' }

f(4);
```

{:.quiz}
1 | even
0 | odd
0 | обидва
0 | нічого

{% include quiz.html %}

<div class="extended-explanation">

`4` задовольняє умову `where $n %% 2`, тож обирається специфічніший кандидат і виводиться `even`. Кандидат зі звичайним `Int` є всеохопним для всього, що умову не проходить.

</div>

{% include nav.html %}
