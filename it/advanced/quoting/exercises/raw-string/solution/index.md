---
title: 'Solution: Una stringa grezza'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
say Q{$x and \n};
```

🦋 Puoi trovare il codice sorgente nel file [raw-string.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/raw-string.raku).

## Output

```
$x and \n
```

## Commenti

1. `Q` è la forma di quoting più letterale: non interpola nulla e non elabora nessuna sequenza di escape.

1. Quindi `$x` resta come testo e `\n` resta come un backslash e una `n`.

{% include nav.html %}
