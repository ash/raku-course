---
title: Viktorīna — Funkcijas ar noklusējuma vērtībām
---

{% include menu.html %}

Kāds ir rezultāts, izsaucot sekojošo funkciju ar dažādiem argumentiem?

```raku
sub f($a, $b = 4, $c = 5) {
    $a + $b + $c
}
```

{:.quiz-select}
10 | `f(1)` atgriež&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
8 | `f(1, 2)` atgriež&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
6 | `f(1, 2, 3)` atgriež&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)

{% include quiz.html %}

{% include nav.html %}