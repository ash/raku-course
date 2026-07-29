---
title: Тест — Поглощающие параметры
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

Фиксированные параметры заполняются раньше поглощающего. `$first` принимает `'a'`, и только два оставшихся аргумента `'b'` и `'c'` попадают в `@rest`, поэтому `.elems` возвращает `2`.

</div>

{% include nav.html %}
