---
title: Quiz — Hyper e cross
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
say (1, 2, 3) »+» 10;
```

{:.quiz}
1 | (11 12 13)
0 | (11 2 3)
0 | 16
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

Il meta-operatore hyper `»+»` applica `+` a ogni elemento. Con un singolo valore `10` a destra, quel valore viene esteso a tutta la lista, quindi ogni elemento aumenta di `10`: `(11 12 13)`. (Una riduzione `[+]` avrebbe invece compresso la lista nella singola somma `6`.)

</div>

{% include nav.html %}
