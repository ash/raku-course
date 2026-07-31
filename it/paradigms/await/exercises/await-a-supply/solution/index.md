---
title: 'Soluzione: Attendete un supply'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $sensor = Supply.from-list(18, 21, 19, 23);

my $last = await $sensor;
say "final reading: $last";
```

🦋 Trova il programma nel file [await-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-supply.raku).

## Output

```
final reading: 23
```

## Commenti

1. Attendere un supply blocca finché il flusso non ha emesso tutto ciò che aveva — lo stesso «aspetta fino al completamento» che `await` dà per una promise — e il suo valore è l'**ultima** cosa emessa dal supply, `23`.

1. Questo si adatta a un flusso in cui conta solo lo stato finale, come l'ultima lettura di un sensore. Se ti serve *ogni* valore, quello è un compito per `.tap` o per un blocco `react`, come nelle sezioni precedenti.

{% include nav.html %}
