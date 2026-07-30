---
title: 'Quiz — Lambdas'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my &f = -> $x { $x + $x };
say f(9);
```

{:.quiz}
0 | 9
1 | 18
0 | 81
0 | 99

{% include quiz.html %}

<div class="extended-explanation">

Der Pointy Block ist ein Lambda, das sein Argument zu sich selbst addiert. Mit `9` aufgerufen liefert es `9 + 9`, also `18`.

</div>

{% include nav.html %}
