---
title: Вікторина — Функції з значеннями за замовчуванням
---

{% include menu.html %}

Є функція:

```raku
sub add(Int $x, Int $y) returns Int {
    $x + $y
}
```

Перевірте, які з наступних присвоєнь будуть працювати.

{:.quiz}
1 | my $a = add(4, 6); | Присвоєння нетипізованій змінній працює.
0 | my Rat $b = add(5, 6); | Значення типу `Int` не може бути присвоєно змінній типу `Rat`.
1 | my Int $c = add(7, 8);
0 | my Num $d = add(9, 10);
1 | my Str $e = add(9, 10).Str; | Явне перетворення типу допомагає.
0 | my Str $f = add(9, 10);

{% include quiz.html %}

{% include nav.html %}