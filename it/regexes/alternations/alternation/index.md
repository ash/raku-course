---
title: Alternativa
translations_gpt:
---

{% include menu.html %}

Separa due o più alternative con una barra verticale `|`. Lo schema corrisponde se corrisponde **una qualunque** di esse:

```raku
say 'no thanks' ~~ / yes | no /; # ｢no｣
```

Lo schema ha provato `yes` e `no`; la stringa contiene `no`, quindi è quello che ha corrisposto.

Puoi elencare quante alternative vuoi:

```raku
say 'the sky is blue' ~~ / red | green | blue /; # ｢blue｣
```

Le alternative possono essere qualunque sottoschema, non solo parole letterali: possono contenere classi di caratteri, quantificatori e catture. Per tenere insieme un'alternativa dentro uno schema più grande, raggruppala con le parentesi quadre `[ ]`, che [raggruppano **senza** catturare](/it/regexes/captures/non-capturing):

```raku
say 'cathouse' ~~ / [ cat | dog ] house /; # ｢cathouse｣
```

Qui l'alternativa `cat | dog` è un'unica unità, e deve essere seguita da `house`.

{% include nav.html %}
