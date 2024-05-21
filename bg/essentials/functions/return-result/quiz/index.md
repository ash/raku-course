---
title: Тест — Връщане от функция
---

{% include menu.html %}

## 1

Какво връща тази функция?

```raku
sub f($a, $b) {
    return $a + $b if $a > $b;
    return 42;
}
```

{:.quiz-select}
42 | `f(1, 2)` връща&nbsp; (: 1, 2, 3, 42 :)
3 | `f(2, 1)` връща&nbsp; (: 1, 2, 3, 42 :)
42 | `f(2, 2)` връща&nbsp; (: 1, 2, 3, 42 :)

## 2

Какво връща тази функция?

```raku
sub g() {
    return -1;
    1;
}
```

{:.quiz-select}
−1 | `g()` връща&nbsp; (: −1, 1 :) | Последното изразяване `1;` никога не се достига.


{% include quiz.html %}

{% include nav.html %}