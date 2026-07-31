---
title: 'Soluzione: Concatenate una promise'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $p = start { 'raku' };
my $q = $p.then({ .result.uc });
my $r = $q.then({ .result ~ '!' });
say await $r;
```

🦋 Trova il programma nel file [promise-result.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/promise-result.raku).

## Output

```
RAKU!
```

## Commenti

1. Ogni `.then` costruisce una nuova promise che gira una volta finita la precedente. Dentro il suo blocco, `.result` è il valore prodotto dalla promise precedente.

1. Il primo seguito rende `'raku'` maiuscolo in `'RAKU'`; il secondo aggiunge `'!'`. Attendere l'ultima promise, `$r`, percorre tutta la catena e produce `'RAKU!'` — una piccola pipeline in cui ogni passo trasforma il risultato del passo precedente.

{% include nav.html %}
