---
title: Viktorīna — Atgriešanās no funkcijas
---

{% include menu.html %}

## 1

Ko atgriež šī funkcija?

```raku
sub f($a, $b) {
    return $a + $b if $a > $b;
    return 42;
}
```

{:.quiz-select}
42 | `f(1, 2)` atgriež&nbsp; (: 1, 2, 3, 42 :)
3 | `f(2, 1)` atgriež&nbsp; (: 1, 2, 3, 42 :)
42 | `f(2, 2)` atgriež&nbsp; (: 1, 2, 3, 42 :)

## 2

Ko atgriež šī funkcija?

```raku
sub g() {
    return -1;
    1;
}
```

{:.quiz-select}
−1 | `g()` atgriež&nbsp; (: −1, 1 :) | Pēdējais izteiciens `1;` nekad netiek sasniegts.


{% include quiz.html %}

{% include nav.html %}