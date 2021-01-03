---
title: Quiz — Return from a function
---

{% include menu.html %}

## 1

What does this function return?

```raku
sub f($a, $b) {
    return $a + $b if $a > $b;
    return 42;
}
```

{:.quiz-select}
42 | `f(1, 2)` returns (: 1, 2, 3, 42 :)
3 | `f(2, 1)` returns (: 1, 2, 3, 42 :)
42 | `f(2, 2)` returns (: 1, 2, 3, 42 :)

## 2

What does this function return?

```raku
sub f() {
    return -1;
    1;
}
```

{:.quiz-select}
−1 | `f()` returns (: −1, 1 :) | The last expression `1;` is never reached.


{% include quiz.html %}

{% include nav.html %}
