---
title: 'Тест — react'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

Тело `whenever` собирает каждое значение, но вызывает `done`, как только видит `3`. `done`
закрывает блок `react`, поэтому supply бросается на полпути, `4` и `5` не обрабатываются,
и остаётся `[1 2 3]`.

</div>

{% include nav.html %}
