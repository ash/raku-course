---
title: Quiz — Native Typen
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Wenn du einen nativen Wert introspektierst, wird er automatisch in den passenden vollwertigen Typ *geboxt*. Obwohl `$n` als nativer `int` deklariert ist, liefert die Abfrage des Typnamens über `.^name` den geboxten `Int`.

</div>

{% include nav.html %}
