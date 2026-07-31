---
title: Quiz — Leggere le righe
translations_gpt:
---

{% include menu.html %}

Un file `n.txt` contiene tre righe. Quante volte gira il corpo di questo ciclo?

```raku
for 'n.txt'.IO.lines -> $line {
    say $line;
}
```

{:.quiz}
0 | 1
1 | 3
0 | 0
0 | una volta per ogni carattere

{% include quiz.html %}

{% include nav.html %}
