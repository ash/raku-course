---
title: 'Quiz — Der rückwärtige Feed'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

`<==` ändert nur die Richtung, in der die Pipeline geschrieben wird, nicht die Reihenfolge der Daten. Die Quelle `(10, 20, 30)` fließt herein — Ziel links —, und `map(* + 1)` addiert an Ort und Stelle jedem Element eins hinzu, was `[11 21 31]` ergibt. Ein rückwärtiger Feed dreht die Elemente nie um; dafür bräuchten Sie ein ausdrückliches `reverse`.

</div>

{% include nav.html %}
