---
title: Token più lungo e prima corrispondenza
translations_gpt:
---

{% include menu.html %}

Quando due alternative potrebbero corrispondere entrambe nello stesso punto, l'operatore `|` sceglie quella che riconosce il pezzo di testo **più lungo**. Questo si chiama _riconoscimento del token più lungo_:

```raku
say 'catdog' ~~ / cat | catdog /; # ｢catdog｣
```

Anche se `cat` è scritto per primo e corrisponderebbe, `|` preferisce il più lungo `catdog`.

A volte vuoi l'opposto: provare le alternative nell'ordine in cui le hai scritte e prendere la **prima** che corrisponde. È ciò che fa la doppia barra `||`:

```raku
say 'catdog' ~~ / cat || catdog /; # ｢cat｣
```

Ora `cat` viene provato per primo e corrisponde, quindi il motore si ferma lì e non prende mai in considerazione `catdog`.

Usa `|` (token più lungo) quando vuoi la corrispondenza «migliore» a prescindere dall'ordine — è la scelta abituale, e quella su cui contano le grammatiche. Usa `||` (prima corrispondenza) quando l'ordine delle alternative è significativo e vuoi che vincano quelle precedenti.

{% include nav.html %}
