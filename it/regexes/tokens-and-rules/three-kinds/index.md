---
title: regex, token e rule
translations_gpt:
---

{% include menu.html %}

Le tre parole chiave si costruiscono l'una sull'altra:

* `regex` — torna sui propri passi, come gli schemi in `/ … /`
* `token` — **non** torna sui propri passi
* `rule` — come `token`, ma gli spazi nello schema sono significativi

_Tornare sui propri passi_ (backtracking) significa che, quando una parte successiva dello schema fallisce, il motore torna indietro e prova una corrispondenza più corta per una parte precedente. Un `regex` fa così:

```raku
my regex r { \w+ 'b' }
say so 'aaab' ~~ / <r> /; # True
```

`\w+` afferra dapprima tutto `aaab`, poi deve restituire l'ultima `b` perché la `b` letterale possa corrispondere. Un `token` rifiuta di restituire alcunché:

```raku
my token t { \w+ 'b' }
say so 'aaab' ~~ / <t> /; # False
```

Qui `\w+` prende tutto `aaab`, la `b` letterale non trova più nulla e il token fallisce semplicemente invece di tornare sui propri passi.

Sembra una limitazione, ma per le grammatiche è esattamente ciò che vuoi: ogni token dovrebbe riconoscere una cosa netta e impegnarsi su quella. Questo rende l'analisi più veloce e il risultato prevedibile. **Usa `token` come scelta predefinita**; ricorri a `regex` solo nelle rare occasioni in cui il backtracking ti serve davvero.

{% include nav.html %}
