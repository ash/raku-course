---
title: 'Soluzione: Cancellate un file'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
spurt 'note.txt', 'temporary';
say 'note.txt'.IO.e;

unlink 'note.txt';
say 'note.txt'.IO.e;
```

🦋 Trova il programma nel file [delete-a-file.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/delete-a-file.raku).

## Output

```
True
False
```

## Commenti

1. `spurt` crea il file, quindi il primo test con `.e` riferisce `True`.

1. `unlink` lo cancella. Il secondo test con `.e` riferisce allora `False`, perché il file non c'è più. Nota l'uso di `.e` invece di `.f`: il test di tipo `.f` solleverebbe un'eccezione su un percorso che non esiste più, mentre `.e` risponde semplicemente `False`.

{% include nav.html %}
