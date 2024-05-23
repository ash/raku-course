---
title: Quiz — Parametri nominati
---

{% include menu.html %}

Considera functionem:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

## 1

Quae sunt modi validi ad eam vocandam?

{:.quiz}
0 | f(1, 2) | Argumenta positionale data, non nominata.
1 | f(a => 1, b => 2)
0 | f(a = 1, b = 2) | Operator assignationis pro constructor parium.
1 | f(b => 2, a => 1)

## 2

Pro eadem functione, quid sequentes vocationes reddunt?

{:.quiz-select}
−1 | `f(a => 1, b => 2)` reddit&nbsp; (: 1, −1 :)
−1 | `f(b => 2, a => 1)` reddit&nbsp; (: 1, −1 :) | Ordo argumentorum nominatum non refert.
1 | `f(a => 2, b => 1)` reddit&nbsp; (: 1, −1 :)


{% include quiz.html %}

{% include nav.html %}