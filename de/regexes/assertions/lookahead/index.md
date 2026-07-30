---
title: Lookahead
translations_gpt:
---

{% include menu.html %}

Ein _Lookahead_ prüft, was unmittelbar **nach** der aktuellen Position kommt. Er wird in spitzen Klammern geschrieben:

* `<?before …>` — gelingt, wenn der Text danach trifft (bejahender Lookahead)
* `<!before …>` — gelingt, wenn der Text danach **nicht** trifft (verneinender Lookahead)

Die Zusicherung selbst trifft keine Zeichen; sie prüft nur die Position. Treffen Sie etwa eine Zahl nur dann, wenn ihr das Wort `dollars` folgt:

```raku
say '100 dollars' ~~ / \d+ <?before ' dollars'> /; # ｢100｣
```

Der Treffer ist nur `100` — der Text ` dollars` wurde geprüft, aber nicht mit aufgenommen.

Da der Lookahead nur behauptet, was folgt, trifft dieselbe Zahl je nach der Währung dahinter oder eben nicht:

```raku
say so '100 euro'    ~~ / \d+ <?before ' euro'> /; # True
say so '100 dollars' ~~ / \d+ <?before ' euro'> /; # False
```

Die Ziffern sind in beiden Zeichenketten gleich, doch die Zusicherung nimmt `100` nur an, wenn ` euro` folgt.

Die verneinende Form ist nützlich für „… aber nicht, wenn darauf … folgt“. Treffen Sie `cat` nur dann, wenn **keine** Ziffer folgt:

```raku
say so 'cats' ~~ / cat <!before \d> /; # True
say so 'cat5' ~~ / cat <!before \d> /; # False
```

In `cat5` sieht der Lookahead direkt hinter `cat` eine Ziffer, die verneinende Zusicherung scheitert also, und damit scheitert der ganze Treffer.

{% include nav.html %}
