---
title: Тест — Именувани параметри
---

{% include menu.html %}

Разгледайте следната функция:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

## 1

Кои са валидните начини за извикване на функцията?

{:.quiz}
0 | f(1, 2) | Подадени са позиционни аргументи, не именувани.
1 | f(a => 1, b => 2)
0 | f(a = 1, b = 2) | Оператор за присвояване вместо конструктор на двойка.
1 | f(b => 2, a => 1)

## 2

За същата функция, какво връщат следните извиквания?

{:.quiz-select}
−1 | `f(a => 1, b => 2)` връща&nbsp; (: 1, −1 :)
−1 | `f(b => 2, a => 1)` връща&nbsp; (: 1, −1 :) | Редът на именуваните аргументи няма значение.
1 | `f(a => 2, b => 1)` връща&nbsp; (: 1, −1 :)


{% include quiz.html %}

{% include nav.html %}