---
title: Heredoc
---

{% include menu.html %}

## Problema

Heredoc _interpolante_ utens, epistulam confirmationis ordinis ex paucis variabilibus aedifica — emptori `$name`, rei `$item`, pretio unitatis `$price`, et numero `$count`. Heredoc variabiles interpolari debet *atque* summam in linea computare cum clausura inserta `{ … }` (`$count * $price`).

Corpus heredoc indenta ut cum codice circumdante congruat, et terminatorem claudentem cum textu allinea ut indentatio in output non appareat. Resultatum imprime.

## Exemplum

Pro `$name = 'Anna'`, `$item = 'Raku Book'`, `$price = 25`, et `$count = 3`, programma imprimit, sine spatiis praecedentibus:

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
