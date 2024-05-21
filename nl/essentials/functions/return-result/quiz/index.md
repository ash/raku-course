---
title: Quiz — Return from a function
---

{% include menu.html %}

## 1

Wat retourneert deze functie?

```raku
sub f($a, $b) {
    return $a + $b if $a > $b;
    return 42;
}
```

{:.quiz-select}
42 | `f(1, 2)` retourneert&nbsp; (: 1, 2, 3, 42 :)
3 | `f(2, 1)` retourneert&nbsp; (: 1, 2, 3, 42 :)
42 | `f(2, 2)` retourneert&nbsp; (: 1, 2, 3, 42 :)

## 2

Wat retourneert deze functie?

```raku
sub g() {
    return -1;
    1;
}
```

{:.quiz-select}
−1 | `g()` retourneert&nbsp; (: −1, 1 :) | De laatste expressie `1;` wordt nooit bereikt.


{% include quiz.html %}

{% include nav.html %}