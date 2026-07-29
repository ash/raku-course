---
title: 'Тест — Всеїдні параметри'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
sub f($first, *@rest) {
    say @rest.elems;
}

f('a', 'b', 'c');
```

{:.quiz}
1 | 2
0 | 3
0 | 1
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Сталі параметри заповнюються раніше за всеїдний. `$first` бере `'a'`, і лише два аргументи, що лишилися — `'b'` та `'c'`, — потрапляють у `@rest`, тож його `.elems` дорівнює `2`.

</div>

{% include nav.html %}
