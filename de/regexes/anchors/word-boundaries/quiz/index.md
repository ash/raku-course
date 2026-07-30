---
title: 'Quiz — Anker'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
say so 'I have a dog' ~~ /<< dog >>/;
```

{:.quiz}
1 | True
0 | False
0 | ｢dog｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Das Muster verlangt, dass `dog` ein ganzes Wort ist. In `I have a dog` steht `dog` für sich, mit einem Leerzeichen davor und dem Ende der Zeichenkette dahinter, es gibt also auf beiden Seiten eine Wortgrenze, der Treffer gelingt, und `so` liefert `True`.

</div>

{% include nav.html %}
