---
title: Matching senza distinzione fra maiuscole e minuscole
translations_gpt:
---

{% include menu.html %}

Normalmente un regex distingue le maiuscole dalle minuscole: `/hello/` non riconosce `HELLO`. L'avverbio `:i` (abbreviazione di `:ignorecase`) spegne quella distinzione:

```raku
say 'HELLO' ~~ /:i hello/; # ｢HELLO｣
```

Con `:i` le lettere corrispondono a prescindere dalle maiuscole, quindi lo schema minuscolo riconosce il testo maiuscolo. Funziona in entrambe le direzioni e anche per le forme miste:

```raku
say 'I use RAKU' ~~ /:i raku/; # ｢RAKU｣
```

Puoi anche scrivere l'avverbio sull'operatore `m///` invece che dentro lo schema:

```raku
say 'HELLO' ~~ m:i/hello/; # ｢HELLO｣
```

Entrambe le forme fanno ignorare le maiuscole all'**intero** schema. La [pagina successiva](/it/regexes/adverbs/adverb-scope) guarda più da vicino *dove* si applica un avverbio — la differenza fra le due collocazioni — e come riaccendere la distinzione di maiuscole per una parte dello schema.

{% include nav.html %}
