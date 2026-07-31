---
title: 'Soluzione: Attendetene molte'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @words = <apple pear plum>;
my @jobs = @words.map(-> $w { start { $w.uc } });
say await @jobs;
```

🦋 Trova il programma nel file [await-many.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/await-many.raku).

## Output

```
(APPLE PEAR PLUM)
```

## Commenti

1. `@words.map(-> $w { start { $w.uc } })` trasforma ogni parola nella propria promise, così tutte e tre diventano maiuscole in modo concorrente. Il blocco con la freccia dà il nome `$w` alla parola, così che ogni promise catturi quella giusta.

1. `await @jobs` aspetta l'intero elenco e restituisce i risultati nel loro ordine originale, dando `(APPLE PEAR PLUM)`.

{% include nav.html %}
