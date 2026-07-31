---
title: 'Soluzione: Esiste?'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say 'test.txt'.IO.e;
spurt 'test.txt', 'x';
say 'test.txt'.IO.e;
```

🦋 Trova il programma nel file [does-it-exist.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/does-it-exist.raku).

## Output

```
False
True
```

## Commenti

1. `.e` verifica se un percorso esiste. Il primo controllo avviene prima che il file sia creato, quindi restituisce `False`.

1. `spurt` crea poi `test.txt`, e il secondo controllo sullo *stesso* percorso restituisce ora `True`. Interrogare di nuovo l'oggetto percorso riflette lo stato attuale del file system.

{% include nav.html %}
