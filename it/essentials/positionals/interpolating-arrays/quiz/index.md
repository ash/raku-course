---
title: Quiz — Interpolating arrays
---

{% include menu.html %}

Dato il seguente array:

```raku
my @arr = 10, 9, 8, 3, 2, 1;
```

Completa i seguenti programmi per ottenere l'output richiesto.

## 1

Stampa il terzo elemento (l'elemento con indice `2`).

{:.quiz-code}
[2] | say &quot;Il terzo elemento è @arr␣␣&quot;;

## 2

Stampa tutti gli elementi (senza indicizzarli esplicitamente).

{:.quiz-code}
arr[] | say &quot;Questo array contiene: @␣␣␣␣.&quot;; | L'output è ”Questo array contiene: 10 9 8 3 2 1.“

## 3

Stampa la dimensione dell'array (chiamando il metodo `elems`).

{:.quiz-code}
{@arr.elems} | say &quot;Ci sono ␣␣␣␣␣␣␣␣ elementi.&quot;; | Sono necessarie le parentesi graffe per incorporare il codice Raku in una stringa Raku.

{% include quiz.html %}

{% include nav.html %}