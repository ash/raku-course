---
title: 'Soluzione: Svuotate una directory'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
mkdir 'cache';
spurt 'cache/a.tmp', '1';
spurt 'cache/b.tmp', '2';

.unlink for 'cache'.IO.dir;
rmdir 'cache';

say 'cache'.IO.e;
```

🦋 Trova il programma nel file [clear-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/clear-a-directory.raku).

## Output

```
False
```

## Commenti

1. `rmdir` rimuove solo una directory vuota, quindi i file devono sparire per primi. `'cache'.IO.dir` elenca le voci e `.unlink for …` cancella ciascuna.

1. Con la directory ora vuota, `rmdir` la rimuove. Il test finale con `.e` riferisce `False`, confermando che `cache` non c'è più.

{% include nav.html %}
