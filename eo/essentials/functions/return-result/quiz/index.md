---
title: Kvizo — Reveno de funkcio
---

{% include menu.html %}

## 1

Kion ĉi tiu funkcio revenas?

```raku
sub f($a, $b) {
    return $a + $b if $a > $b;
    return 42;
}
```

{:.quiz-select}
42 | `f(1, 2)` revenas&nbsp; (: 1, 2, 3, 42 :)
3 | `f(2, 1)` revenas&nbsp; (: 1, 2, 3, 42 :)
42 | `f(2, 2)` revenas&nbsp; (: 1, 2, 3, 42 :)

## 2

Kion ĉi tiu funkcio revenas?

```raku
sub g() {
    return -1;
    1;
}
```

{:.quiz-select}
−1 | `g()` revenas&nbsp; (: −1, 1 :) | La lasta esprimo `1;` neniam estas atingita.


{% include quiz.html %}

{% include nav.html %}