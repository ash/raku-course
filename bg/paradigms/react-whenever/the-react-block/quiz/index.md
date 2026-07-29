---
title: 'Тест — react'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my @got;

react {
    whenever Supply.from-list(1, 2, 3, 4, 5) {
        @got.push($_);
        done if $_ == 3;
    }
}

say @got;
```

{:.quiz}
1 | [1 2 3]
0 | [1 2 3 4 5]
0 | [3]
0 | [4 5]

{% include quiz.html %}

<div class="extended-explanation">

Тялото на `whenever` събира всяка стойност, но извиква `done`, щом види `3`. `done` затваря блока `react`, така че потокът се изоставя и `4` и `5` изобщо не се обработват, което оставя `[1 2 3]`.

</div>

{% include nav.html %}
