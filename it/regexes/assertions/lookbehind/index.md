---
title: Lookbehind
translations_gpt:
---

{% include menu.html %}

Un _lookbehind_ controlla ciò che viene immediatamente **prima** della posizione corrente:

* `<?after …>` — riesce se il testo che precede corrisponde (lookbehind positivo)
* `<!after …>` — riesce se il testo che precede **non** corrisponde (lookbehind negativo)

Questo ti permette di riconoscere qualcosa solo per via di ciò che lo precede, senza includere quel prefisso nel risultato. Per esempio, cattura le cifre che seguono un segno di dollaro, ma lascia il `$` fuori dalla corrispondenza:

```raku
if '$100' ~~ / <?after '$'> \d+ / {
    say $/; # ｢100｣
}
```

L'asserzione `<?after '$'>` richiede un `$` subito prima della posizione corrente, poi `\d+` riconosce le cifre. La corrispondenza è `100`, senza il segno di dollaro.

Lookahead e lookbehind si combinano spesso. Un pezzo di testo avvolto in `<?after …>` e `<?before …>` corrisponde solo quando sta fra i vicini richiesti — un modo comodo di estrarre un valore da un contesto noto.

{% include nav.html %}
