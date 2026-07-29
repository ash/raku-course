---
title: 'Тест — Автопотоковість'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

Множення з'єднання автопотокується: `* 2` застосовується до кожного значення за з'єднанням, даючи нове з'єднання `any`: `any(2, 4, 6)`.

</div>

{% include nav.html %}
