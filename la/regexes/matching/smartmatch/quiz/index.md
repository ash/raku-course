---
title: Quiz — Congruentia sagax
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit? Nota nullum `so` hac vice adesse, et congruentiam forma `m/.../` uti.

```raku
say 'the cat sat' ~~ m/sat/;
```

{:.quiz}
0 | True
0 | False
1 | ｢sat｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`m/sat/` eodem modo congruit quo `/sat/` congrueret. Sine `so` quod illud in Booleanam vertat, congruentia sagax ipsum obiectum congruentiae reddit, quod `say` inter uncos angulares ut `｢sat｣` imprimit.

</div>

{% include nav.html %}
