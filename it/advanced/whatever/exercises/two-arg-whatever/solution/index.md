---
title: 'Solution: Un Whatever a due argomenti'
translations_gpt: true
---

{% include menu.html %}

Ecco una possibile soluzione al problema.

## Codice

```raku
my $join = * ~ '-' ~ *;

say $join('a', 'b');
```

🦋 Puoi trovare il codice sorgente nel file [two-arg-whatever.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/two-arg-whatever.raku).

## Output

```
a-b
```

## Commenti

1. L'espressione contiene due stelle, quindi Raku costruisce un `WhateverCode` che accetta due argomenti — la prima stella e il primo argomento, la seconda stella e il secondo.

1. Chiamando `$join('a', 'b')` si riempiono le stelle in ordine, ottenendo `'a' ~ '-' ~ 'b'`, che produce `a-b`.

{% include nav.html %}
