---
title: 'Тест — whenever'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_ * 2);
    }
}

say @out;
```

{:.quiz}
0 | [1 2 3]
1 | [2 4 6]
0 | [6]
0 | 12

{% include quiz.html %}

<div class="extended-explanation">

Тело `whenever` выполняется для каждого значения и добавляет его удвоенное значение. Supply
выдаёт `1, 2, 3`, поэтому в `@out` собирается `2, 4, 6`.

</div>

{% include nav.html %}
