---
title: 'Soluzione: Contate le righe'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
spurt 'data.txt', "a\nb\nc\nd\n";

say 'data.txt'.IO.lines.elems;
```

🦋 Trova il programma nel file [count-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/count-lines.raku).

## Output

```
4
```

## Commenti

1. `.IO.lines` restituisce le righe del file come elenco.

1. `.elems` le conta, dando `4`.

{% include nav.html %}
