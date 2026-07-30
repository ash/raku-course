---
title: 'Quiz — Regels lezen'
translations_gpt:
---

{% include menu.html %}

Een bestand `n.txt` bevat drie regels. Hoe vaak draait de body van deze lus?

```raku
for 'n.txt'.IO.lines -> $line {
    say $line;
}
```

{:.quiz}
0 | 1
1 | 3
0 | 0
0 | één keer per teken

{% include quiz.html %}

{% include nav.html %}
