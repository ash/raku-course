---
title: Тест — Функции с подразбиращи се стойности
---

{% include menu.html %}

Има функция:

```raku
sub add(Int $x, Int $y) returns Int {
    $x + $y
}
```

Проверете кои от следните присвоявания ще работят.

{:.quiz}
1 | my $a = add(4, 6); | Присвояването на нетипизирана променлива работи.
0 | my Rat $b = add(5, 6); | Стойност от тип `Int` не може да бъде присвоена на променлива от тип `Rat`.
1 | my Int $c = add(7, 8);
0 | my Num $d = add(9, 10);
1 | my Str $e = add(9, 10).Str; | Явната конверсия на тип помага.
0 | my Str $f = add(9, 10);

{% include quiz.html %}

{% include nav.html %}