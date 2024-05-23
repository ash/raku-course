---
title: Quiz — Functiones cum valoribus defaltis
---

{% include menu.html %}

Quid est eventus vocandi functionem sequentem cum argumentis diversis?

```raku
sub f($a, $b = 4, $c = 5) {
    $a + $b + $c
}
```

{:.quiz-select}
10 | `f(1)` reddit&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
8 | `f(1, 2)` reddit&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
6 | `f(1, 2, 3)` reddit&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)

{% include quiz.html %}

{% include nav.html %}