---
title: La regola TOP
translations_gpt:
---

{% include menu.html %}

Quando analizzi una stringa con una grammatica, Raku parte da un token chiamato `TOP`. È il punto di ingresso — la descrizione dell'**intero** input. Tutto il resto nella grammatica esiste per sostenerlo.

Un token `TOP` di solito si riferisce ad altri token per nome, spezzando il problema in parti più piccole:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}
```

Leggi `TOP` ad alta voce: «una chiave, poi un segno di uguale, poi un valore». I token `key` e `value` dicono che aspetto ha ciascuna di quelle parti. Questa divisione è tutto il senso di una grammatica: ogni token ha un compito piccolo e chiaramente nominato, e `TOP` li assembla.

`TOP` è solo una convenzione imposta da `.parse`; gli altri token puoi nominarli come vuoi. I nomi che scegli diventano anche le catture con nome nel risultato, quindi una grammatica ben nominata produce un albero di corrispondenze che si descrive da sé, come vedrai fra poco.

{% include nav.html %}
