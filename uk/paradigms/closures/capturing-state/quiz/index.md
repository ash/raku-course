---
title: 'Тест — Замикання'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

Повернена підпрограма замикається на `$total`, тож усі три виклики спільно користуються тією самою змінною. Перші два доводять її до `30`; третій додає `5` і друкує поточну суму, `35`.

</div>

{% include nav.html %}
