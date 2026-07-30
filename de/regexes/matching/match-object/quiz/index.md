---
title: 'Quiz — Treffen'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my $m = 'abcdef' ~~ /cd/;
say $m.from;
```

{:.quiz}
0 | ｢cd｣
1 | 2
0 | 3
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

Der Treffer `cd` beginnt an Index `2` (die Zeichen sind mit `a`=0, `b`=1, `c`=2 nummeriert). Die Methode `.from` liefert diese Anfangsposition, nicht den getroffenen Text.

</div>

{% include nav.html %}
