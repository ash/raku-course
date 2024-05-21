---
title: Quiz — Rückkehr aus einer Funktion
---

{% include menu.html %}

## 1

Was gibt diese Funktion zurück?

```raku
sub f($a, $b) {
    return $a + $b if $a > $b;
    return 42;
}
```

{:.quiz-select}
42 | `f(1, 2)` gibt zurück&nbsp; (: 1, 2, 3, 42 :)
3 | `f(2, 1)` gibt zurück&nbsp; (: 1, 2, 3, 42 :)
42 | `f(2, 2)` gibt zurück&nbsp; (: 1, 2, 3, 42 :)

## 2

Was gibt diese Funktion zurück?

```raku
sub g() {
    return -1;
    1;
}
```

{:.quiz-select}
−1 | `g()` gibt zurück&nbsp; (: −1, 1 :) | Der letzte Ausdruck `1;` wird nie erreicht.


{% include quiz.html %}

{% include nav.html %}