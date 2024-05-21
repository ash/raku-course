---
title: Quiz — Return from a function
---

{% include menu.html %}

## 1

Cosa restituisce questa funzione?

```raku
sub f($a, $b) {
    return $a + $b if $a > $b;
    return 42;
}
```

{:.quiz-select}
42 | `f(1, 2)` restituisce&nbsp; (: 1, 2, 3, 42 :)
3 | `f(2, 1)` restituisce&nbsp; (: 1, 2, 3, 42 :)
42 | `f(2, 2)` restituisce&nbsp; (: 1, 2, 3, 42 :)

## 2

Cosa restituisce questa funzione?

```raku
sub g() {
    return -1;
    1;
}
```

{:.quiz-select}
−1 | `g()` restituisce&nbsp; (: −1, 1 :) | L'ultima espressione `1;` non viene mai raggiunta.


{% include quiz.html %}

{% include nav.html %}