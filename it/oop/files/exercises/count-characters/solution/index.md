---
title: 'Soluzione: Contate i caratteri'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
spurt 'data.txt', 'Raku';

say slurp('data.txt').chars;
```

🦋 Trova il programma nel file [count-characters.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/count-characters.raku).

## Output

```
4
```

## Commenti

1. `spurt` scrive la stringa `Raku` nel file.

1. `slurp` la rilegge come stringa e `.chars` ne conta i caratteri: quattro.

1. Se ispezioni il file, vedrai davvero solo i quattro caratteri; il ritorno a capo non viene aggiunto.

{% include nav.html %}
