---
title: Quiz — Einen Operator definieren
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
sub infix:<times>($a, $b) { $a * $b }

say 6 times 7;
```

{:.quiz}
1 | 42
0 | 67
0 | times
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

`infix:<times>` definiert einen neuen Operator, der zwischen seinen zwei Operanden geschrieben wird. Sein Rumpf multipliziert sie, sodass `6 times 7` zu `42` ausgewertet wird — ein Operator ist einfach eine Subroutine mit einem speziellen Namen.

</div>

{% include nav.html %}
