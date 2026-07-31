---
title: Quiz — Typi nativi
translations_gpt:
---

{% include menu.html %}

Quid sequens programma imprimit?

```raku
my int $n = 42;
say $n.^name;
```

{:.quiz}
1 | Int
0 | int
0 | (Int)
0 | Num

{% include quiz.html %}

<div class="extended-explanation">

Cum valorem nativum introspicis, automatice in typum plenum correspondentem *involvitur*. Itaque etsi `$n` ut nativus `int` declaratus est, nomen typi per `.^name` petitum refert involutum `Int`.

</div>

{% include nav.html %}
