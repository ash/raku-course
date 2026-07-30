---
title: 'Quiz — De achterwaartse feed'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my @out <== map(* + 1) <== (10, 20, 30);
say @out;
```

{:.quiz}
1 | [11 21 31]
0 | [31 21 11]
0 | [30 20 10]
0 | [10 20 30]

{% include quiz.html %}

<div class="extended-explanation">

`<==` verandert alleen de richting waarin de pijplijn geschreven wordt, niet de volgorde van de gegevens. De bron `(10, 20, 30)` stroomt binnen — doel links — en `map(* + 1)` telt er ter plekke bij elk element één bij op, wat `[11 21 31]` geeft. Een achterwaartse feed keert de elementen nooit om; daarvoor zou je een expliciete `reverse` nodig hebben.

</div>

{% include nav.html %}
