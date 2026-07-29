---
title: 'Тест — Замыкания'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
sub make-acc {
    my $total = 0;
    return sub ($x) { $total += $x };
}

my &add = make-acc;
add(10);
add(20);
say add(5);
```

{:.quiz}
0 | 5
0 | 30
1 | 35
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Возвращаемая подпрограмма замыкается на `$total`, поэтому все три вызова используют одну и ту же
переменную. Первые два доводят её до `30`; третий прибавляет `5` и печатает накопленный итог —
`35`.

</div>

{% include nav.html %}
