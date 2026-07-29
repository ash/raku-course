---
title: 'Тест — Автопоточность'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

Умножение джанкшена происходит с автопоточностью: `* 2` применяется к каждому стоящему за ним
значению, порождая новый джанкшен `any` — `any(2, 4, 6)`.

</div>

{% include nav.html %}
