---
title: 'Solution: La chiave esiste?'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

🦋 Puoi trovare il codice sorgente nel file [check-exists.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/check-exists.raku).

## Output

```
False
```

## Commenti

1. L'avverbio `:exists` restituisce se la chiave è presente, senza recuperare il valore.

1. L'hash non ha alcuna chiave `z`, quindi restituisce `False` — e, a differenza di una ricerca normale, non crea la chiave come effetto collaterale.

{% include nav.html %}
