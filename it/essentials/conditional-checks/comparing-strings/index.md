---
title: Confronto di stringhe
---

{% include menu.html %}

Il confronto di stringhe utilizza il proprio set di operatori:

`eq` | Uguale
`ne` | Non uguale
`gt` | Maggiore di
`ge` | Maggiore o uguale a
`lt` | Minore di
`le` | Minore o uguale a

## Esempi

Esaminiamo alcuni esempi di confronto tra due stringhe:

```raku
say 'alpha' lt 'beta'; # True
say 'word' ne 'Word';  # True
say 'xyz' gt 'xvw';    # True
```

{% include nav.html %}