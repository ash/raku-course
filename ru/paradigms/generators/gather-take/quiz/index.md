---
title: 'Тест — gather и take'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
my @a = gather {
    for 1..5 {
        take $_ if $_ > 3;
    }
}

say @a;
```

{:.quiz}
0 | [1 2 3 4 5]
1 | [4 5]
0 | [1 2 3]
0 | [3 4 5]

{% include quiz.html %}

<div class="extended-explanation">

`take` выполняется, только когда `$_ > 3`, поэтому в список добавляются лишь `4` и `5`. Всё
остальное пропускается, и получается `[4 5]`.

</div>

{% include nav.html %}
