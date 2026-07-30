---
title: 'Quiz — Anker der Zeichenkette'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus? Beachten Sie das `$` am Ende des Musters.

```raku
say so 'hello world' ~~ / world $/;
```

{:.quiz}
1 | True
0 | False
0 | ｢world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Der Anker `$` verlangt, dass der Treffer ganz am Ende der Zeichenkette endet. Die Zeichenkette `hello world` endet tatsächlich auf `world`, das verankerte Muster gelingt also, und `so` liefert `True`.

</div>

{% include nav.html %}
