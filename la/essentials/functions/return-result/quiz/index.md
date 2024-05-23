---
title: Quiz — Reditus ex functione
---

{% include menu.html %}

## 1

Quid haec functio reddit?

```raku
sub f($a, $b) {
    return $a + $b if $a > $b;
    return 42;
}
```

{:.quiz-select}
42 | `f(1, 2)` reddit&nbsp; (: 1, 2, 3, 42 :)
3 | `f(2, 1)` reddit&nbsp; (: 1, 2, 3, 42 :)
42 | `f(2, 2)` reddit&nbsp; (: 1, 2, 3, 42 :)

## 2

Quid haec functio reddit?

```raku
sub g() {
    return -1;
    1;
}
```

{:.quiz-select}
−1 | `g()` reddit&nbsp; (: −1, 1 :) | Ultima expressio `1;` numquam attingitur.


{% include quiz.html %}

{% include nav.html %}