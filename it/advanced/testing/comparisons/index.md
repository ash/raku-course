---
title: Confronti e piani
translations_gpt:
---

{% include menu.html %}

Oltre a `ok` e `is`, il modulo `Test` dispone di confronti per diversi tipi di valore. I più utili sono:

* `is` — confronta due valori per uguaglianza (come stringhe/numeri)
* `is-deeply` — confronta due strutture dati per uguaglianza esatta e consapevole dei tipi
* `like` — verifica che una stringa corrisponda a un'espressione regolare
* `isnt` — ha successo quando due valori **non** sono uguali

`is-deeply` è la scelta giusta per array, hash e dati annidati, perché confronta struttura e tipo in modo preciso:

```raku
use Test;

my @reversed = (1, 2, 3).reverse;
is-deeply @reversed, [3, 2, 1], 'reversed';

done-testing;
```

Questo stampa:

```
ok 1 - reversed
1..1
```

Dove `is` convertirebbe in stringa e confronterebbe in modo approssimativo, `is-deeply` esige che le strutture corrispondano davvero. Nota che `done-testing` pone il piano `1..1` alla fine, dopo il controllo.

Invece di lasciare che `done-testing` conti i test per te, puoi dichiarare il numero in anticipo con `plan`. Questo protegge da un file di test che termina prematuramente e salta silenziosamente dei controlli:

```raku
use Test;

plan 2;
ok True,  'first';
ok 1 < 2, 'second';
```

Questa volta il piano viene **prima**, davanti ai risultati:

```
1..2
ok 1 - first
ok 2 - second
```

Questa è la differenza visibile rispetto a `done-testing`: `plan` stampa il conteggio `1..2` in cima, prima che qualsiasi controllo venga eseguito, mentre `done-testing` lo stampa alla fine. In ogni caso, con `plan 2` l'esecuzione si aspetta esattamente due test; se ne vengono eseguiti di meno (o di più), la suite viene segnalata come fallita. Usa `plan` quando il conteggio è fisso e noto, e `done-testing` quando è più facile lasciare che il framework conti.

{% include nav.html %}
