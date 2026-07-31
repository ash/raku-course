---
title: Il quantificatore di ripetizioni
translations_gpt:
---

{% include menu.html %}

Quando ti serve un numero esatto di ripetizioni, o un intervallo, usa il quantificatore `**` seguito da un numero:

```raku
say '2025' ~~ / \d ** 4 /; # ｢2025｣
```

`\d ** 4` riconosce esattamente quattro cifre di fila.

Un intervallo con due punti ammette un conteggio variabile. Per esempio `\d ** 2..3` riconosce due o tre cifre — quante ne sono disponibili, fino a tre:

```raku
say '12345' ~~ / \d ** 2..3 /; # ｢123｣
```

Lo schema ha preso tre cifre, perché tre è il massimo che l'intervallo `2..3` gli concede.

Puoi anche lasciare aperto l'estremo superiore. `\d ** 2..*` significa «due o più cifre», e `\d ** 1..*` significa lo stesso di `\d+`.

Il quantificatore `**` è la forma generale; `*`, `+` e `?` sono solo comode scorciatoie per i casi comuni `0..*`, `1..*` e `0..1`.

{% include nav.html %}
