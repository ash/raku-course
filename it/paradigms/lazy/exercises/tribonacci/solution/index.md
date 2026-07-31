---
title: 'Soluzione: La successione di Tribonacci'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @trib = 1, 1, 1, * + * + * ... *;
say @trib[^8];
```

🦋 Trova il programma nel file [tribonacci.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/tribonacci.raku).

## Output

```
(1 1 1 3 5 9 17 31)
```

## Commenti

1. La chiusura `* + * + *` somma i tre elementi precedenti per produrre il successivo, quindi servono tre valori di partenza.

1. La sequenza è pigra, quindi conservarla in `@trib` e chiedere `@trib[^8]` calcola solo i primi otto numeri.

{% include nav.html %}
