---
title: 'Soluzione: La stringa più lunga'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @animals = 'cat', 'elephant', 'dog', 'fox';

say @animals.reduce(-> $a, $b { $b.chars > $a.chars ?? $b !! $a });
```

🦋 Trova il programma nel file [longest-string.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/longest-string.raku).

## Output

```
elephant
```

## Commenti

1. Il blocco tiene la più lunga dei suoi due argomenti: `$a` è la stringa più lunga vista finora, `$b` è la successiva, e il ternario restituisce quella con più caratteri.

1. `reduce` porta avanti quel vincitore come `$a` alla chiamata successiva, quindi dopo aver percorso tutto l'elenco il valore accumulato è la stringa più lunga di tutte — `elephant`.

{% include nav.html %}
