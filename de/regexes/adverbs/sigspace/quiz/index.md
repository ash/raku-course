---
title: 'Quiz — Adverbien'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus? Beachten Sie das Adverb `:s` und die Folge von Leerzeichen im Text.

```raku
say so 'hello   world' ~~ /:s hello world/;
```

{:.quiz}
1 | True
0 | False
0 | ｢hello   world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Das Adverb `:s` macht das Leerzeichen zwischen `hello` und `world` im Muster bedeutsam — es verlangt dort Leerraum. Ein oder mehrere Leerzeichen zählen alle, die Folge von drei Leerzeichen im Text trifft also, und das Ergebnis ist `True`. Ohne `:s` würde das Leerzeichen im Muster übergangen und das Muster nach `helloworld` suchen.

</div>

{% include nav.html %}
