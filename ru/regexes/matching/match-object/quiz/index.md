---
title: 'Тест — Сопоставление'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
my $m = 'abcdef' ~~ /cd/;
say $m.from;
```

{:.quiz}
0 | ｢cd｣
1 | 2
0 | 3
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

Совпадение `cd` начинается с индекса `2` (символы нумеруются так: `a`=0, `b`=1, `c`=2). Метод
`.from` возвращает эту начальную позицию, а не совпавший текст.

</div>

{% include nav.html %}
