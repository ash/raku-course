---
title: 'Quiz — Zeilen lesen'
translations_gpt:
---

{% include menu.html %}

Eine Datei `n.txt` enthält drei Zeilen. Wie oft läuft der Rumpf dieser Schleife?

```raku
for 'n.txt'.IO.lines -> $line {
    say $line;
}
```

{:.quiz}
0 | 1
1 | 3
0 | 0
0 | einmal je Zeichen

{% include quiz.html %}

{% include nav.html %}
