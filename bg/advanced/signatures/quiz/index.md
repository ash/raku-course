---
title: Тест — Slurpy параметри
---

{% include menu.html %}

Какво отпечатва следната програма?

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

Фиксираните параметри се попълват преди slurpy. `$first` приема `'a'`, и само двата останали аргумента `'b'` и `'c'` отиват в `@rest`, така че `.elems` е `2`.

</div>

{% include nav.html %}
