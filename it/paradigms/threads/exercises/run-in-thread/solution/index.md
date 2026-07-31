---
title: 'Soluzione: Eseguite in un thread'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $t = Thread.start({ say 'working' });
$t.finish;
```

🦋 Trova il programma nel file [run-in-thread.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/run-in-thread.raku).

## Output

```
working
```

## Commenti

1. `Thread.start` esegue il blocco su un nuovo thread.

1. `.finish` aspetta che il thread finisca, così il programma non termina prima che `working` sia stampato.

{% include nav.html %}
