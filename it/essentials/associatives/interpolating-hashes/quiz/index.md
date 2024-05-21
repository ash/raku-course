---
title: Quiz — Interpolating hashes
---

{% include menu.html %}

Dato il seguente hash:

```raku
my %letters = α => 'Alpha', β => 'Beta', γ => 'Gamma';
```

Completa i seguenti programmi per ottenere l'output richiesto.

## 1

Usando l'hash, stampa il nome della lettera greca `β`. Usa la forma senza virgolette intorno alla stringa chiave.

{:.quiz-code}
&lt;β&gt; | say &quot;La lettera β si chiama %letters␣␣.&quot;;

## 2

Usando l'hash, stampa il nome della lettera greca `β`. Usa la forma in cui la chiave è quotata con virgolette singole.

{:.quiz-code}
{&apos;β&apos;} | say &quot;La lettera β si chiama %letters␣␣␣␣.&quot;;


## 3

Stampa le lettere e i loro nomi come una tabella.

{:.quiz-code}
letters{ | say &quot;Ecco alcune lettere greche:\n%␣␣␣␣␣}\netc.&quot;; | Nota che l'output potrebbe non essere ordinato.

L'output possibile per questo caso è:

    Ecco alcune lettere greche:
    α	Alpha
    β	Beta
    γ	Gamma
    ecc.

{% include quiz.html %}

{% include nav.html %}