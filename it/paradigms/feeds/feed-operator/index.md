---
title: "L'operatore feed"
translations_gpt:
---

{% include menu.html %}

L'operatore di flusso `==>` manda un elenco da sinistra dentro l'operazione a destra. Il risultato scorre poi fin dove punta il `==>` successivo, terminando in una variabile che lo raccoglie:

```raku
(1..10) ==> grep(* %% 2) ==> my @evens;
say @evens; # [2 4 6 8 10]
```

Leggilo da sinistra a destra: prendi `1..10`, conserva i numeri pari e riponi il risultato in `@evens`. L'operatore `%%` significa «è divisibile per», quindi `* %% 2` conserva i numeri pari.

La regola importante è che un flusso deve **terminare in un bersaglio**, di solito `my @array` (o una variabile già esistente). I dati vi scorrono dentro. Scrivere l'assegnamento nel verso opposto, con `=`, non fa ciò che vuoi, perché il flusso e l'assegnamento si contendono il campo; lascia sempre che il flusso finisca nella propria variabile.

Un flusso è solo un altro modo di scrivere una catena di operazioni su elenchi. Lo stesso risultato si potrebbe scrivere `my @evens = (1..10).grep(* %% 2)`. La forma a flusso dà il meglio quando gli stadi sono parecchi, come mostra l'argomento successivo.

{% include nav.html %}
