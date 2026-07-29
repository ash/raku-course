---
title: 'Тест — whenever'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

Тялото на `whenever` се изпълнява за всяка стойност и слага удвоението ѝ. Потокът подава `1, 2, 3`, така че `@out` събира `2, 4, 6`.

</div>

{% include nav.html %}
