---
title: 'Quiz — Zeichenklassen'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
say 'a_1 b' ~~ /\W/;
```

{:.quiz}
0 | ｢a｣
0 | ｢_｣
0 | ｢1｣
1 | ｢ ｣

{% include quiz.html %}

<div class="extended-explanation">

Die Klasse `\W` trifft das erste Zeichen, das **kein** Buchstabe, keine Ziffer und kein Unterstrich ist. Die Zeichen `a`, `_` und `1` sind alle Wortzeichen, das erste Nicht-Wortzeichen ist also das Leerzeichen.

</div>

{% include nav.html %}
