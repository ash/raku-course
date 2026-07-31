---
title: 'Soluzione: Unite e attendete'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $t = Thread.start({ say 'first' });
$t.finish;
say 'second';
```

🦋 Trova il programma nel file [join-and-wait.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/join-and-wait.raku).

## Output

```
first
second
```

## Commenti

1. `.finish` blocca finché il thread non ha stampato `first`.

1. Solo allora il programma principale prosegue e stampa `second`, quindi l'ordine è garantito. Senza `.finish` le due righe potrebbero comparire in un ordine qualunque.

{% include nav.html %}
