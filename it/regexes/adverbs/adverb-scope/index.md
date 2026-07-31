---
title: Ambito degli avverbi
translations_gpt:
---

{% include menu.html %}

L'avverbio `:i` si può scrivere in due posti, e la differenza sta in **dove fa effetto**. Sull'operatore, `m:i/…/` rende insensibile alle maiuscole l'**intero** schema. Scritto dentro il regex, `:i` è _posizionale_: si applica solo dal punto in cui compare in poi. Questo ti permette di allentare la regola sulle maiuscole per una sola parte di uno schema:

```raku
say 'RAKU' ~~ /R :i aku/; # ｢RAKU｣
say 'raku' ~~ /R :i aku/; # Nil
```

Qui la `R` iniziale viene ancora riconosciuta distinguendo le maiuscole — quindi il minuscolo `raku` fallisce — mentre `:i` rende insensibile alle maiuscole solo l'`aku` che segue. Con `m:i/Raku/`, invece, ogni lettera è insensibile alle maiuscole, quindi corrispondono sia `RAKU` sia `raku`.

## Confinato in un gruppo

L'effetto di un avverbio interno è confinato anche al gruppo che lo racchiude. In `/[:i abc]def/` solo `abc` ignora le maiuscole; il `def` dopo il gruppo viene riconosciuto in modo stretto:

```raku
say 'ABCdef' ~~ /[:i abc]def/; # ｢ABCdef｣
say 'ABCDEF' ~~ /[:i abc]def/; # Nil
```

## Spegnere un avverbio

Per rispegnere un avverbio a metà schema, negalo con un `!`. Quindi `:!i` ripristina la distinzione di maiuscole da quel punto in poi:

```raku
say 'ABCdef' ~~ / :i abc :!i def /; # ｢ABCdef｣
say 'ABCDEF' ~~ / :i abc :!i def /; # Nil
```

`:i` allenta la regola sulle maiuscole per `abc`, poi `:!i` la rimette a posto così che `def` debba corrispondere esattamente. Il raggruppamento e `:!i` sono due modi di raggiungere lo stesso obiettivo: limitare un avverbio alla sola parte di schema che ne ha bisogno. Lo stesso interruttore acceso/spento funziona anche per gli altri avverbi interni allo schema.

{% include nav.html %}
