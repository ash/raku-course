---
title: Quiz — Native typen
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

Wanneer je een native waarde introspecteert, wordt deze automatisch *geboxt* naar het overeenkomstige volledige type. Dus hoewel `$n` is gedeclareerd als een native `int`, rapporteert het opvragen van de typenaam via `.^name` het geboxte `Int`.

</div>

{% include nav.html %}
