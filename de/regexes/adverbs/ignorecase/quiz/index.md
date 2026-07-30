---
title: 'Quiz — Ignorecase'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus? Das Muster steht in Großbuchstaben, der Text in gemischter Schreibung.

```raku
say 'Hello' ~~ /:i HELLO/;
```

{:.quiz}
1 | ｢Hello｣
0 | ｢HELLO｣
0 | True
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Das Adverb `:i` schaltet die Unterscheidung zwischen Groß- und Kleinbuchstaben ab, und es wirkt in beide Richtungen — hier trifft das großgeschriebene Muster `HELLO` den gemischt geschriebenen Text. Das Ergebnis ist der getroffene Text, wie er in der Zeichenkette steht, `｢Hello｣`.

</div>

{% include nav.html %}
