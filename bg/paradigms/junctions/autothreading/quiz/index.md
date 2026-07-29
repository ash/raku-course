---
title: 'Тест — Автоматично разнишване'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my $j = 1 | 2 | 3;
say $j * 2;
```

{:.quiz}
0 | 12
0 | 6
1 | any(2, 4, 6)
0 | any(1, 2, 3)

{% include quiz.html %}

<div class="extended-explanation">

Умножението със съединение се разнишва автоматично: `* 2` се прилага към всяка стойност зад съединението и дава ново съединение `any`: `any(2, 4, 6)`.

</div>

{% include nav.html %}
