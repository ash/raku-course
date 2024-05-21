---
title: 'Quiz 1: Concatenating strings and numbers'
---

{% include menu.html %}

Raku converte automaticamente un numero se vuoi concatenarlo a una stringa. In ciascuna delle parti seguenti, seleziona le righe che stampano la stringa richiesta.

## 1

Quali delle righe stampano `Alpha2`?

{:.quiz}
1 | say &apos;Alpha2&apos;;
0 | say &apos;Alpha&apos; 2; | Uno spazio è un errore di sintassi qui.
1 | say &apos;Alpha&apos;, &apos;2&apos;; | Non c'è concatenazione di stringhe, ma il risultato è corretto.
1 | say &apos;Alpha&apos; ~ &apos;2&apos;;
1 | say &apos;Alpha&apos; ~ 2; | Un numero viene convertito in una stringa e poi concatenato.
0 | say &apos;Alpha&apos; + 2; | Un `+` non fa concatenazione di stringhe.
0 | say &apos;Alpha&apos; . 2; | Nemmeno un `.`.

## 2

Quali di queste righe stampano `123`?

{:.quiz}
1 | say 1 ~ 2 ~ 3; | Concatenazione di stringhe qui, anche per i numeri.
0 | say 1 + 2 + 3; | Un'espressione aritmetica regolare.
1 | say &apos;1&apos; ~ &apos;2&apos; ~ &apos;3&apos;; | I singoli caratteri sono anche stringhe.
0 | say &apos;1&apos; + &apos;2&apos; + &apos;3&apos;; | Poiché c'è un `+`, le stringhe vengono convertite in numeri.
1 | say 1 ~ 23;
1 | say 12 ~ 3;
1 | say 123 ~ &apos;&apos;; | `''` è una stringa vuota, quindi aggiungerla non cambia il risultato.

{% include quiz.html %}

{% include nav.html %}