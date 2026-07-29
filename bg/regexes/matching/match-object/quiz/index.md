---
title: 'Тест — Съпоставяне'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

Съвпадението `cd` започва на индекс `2` (знаците са номерирани `a`=0, `b`=1, `c`=2). Методът `.from` връща тази начална позиция, а не съвпадналия текст.

</div>

{% include nav.html %}
