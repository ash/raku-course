---
title: 'Тест — gather и take'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

`take` се изпълнява само когато `$_ > 3`, така че към списъка се добавят само `4` и `5`. Всичко останало се прескача и се получава `[4 5]`.

</div>

{% include nav.html %}
