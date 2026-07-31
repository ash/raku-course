---
title: 'Soluzione: File o directory?'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
spurt 'a.txt', 'x';

say 'a.txt'.IO.f;
say 'a.txt'.IO.d;
```

🦋 Trova il programma nel file [file-or-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/file-or-directory.raku).

## Output

```
True
False
```

## Commenti

1. `.f` verifica se si tratta di un file regolare, quindi restituisce `True` per `a.txt`.

1. `.d` verifica se si tratta di una directory. Interrogato sullo stesso identico percorso, restituisce `False`, perché `a.txt` è un file e non una directory. I due test sono complementari, ed è così che si distingue un file da una directory.

{% include nav.html %}
