---
title: 'Тест — Зіставлення'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

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

Збіг `cd` починається за індексом `2` (символи нумеруються так: `a`=0, `b`=1, `c`=2). Метод `.from` повертає цю початкову позицію, а не текст збігу.

</div>

{% include nav.html %}
