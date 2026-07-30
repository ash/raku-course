---
title: 'Quiz — Eigene Klassen'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus? Die Klasse ist eine **verneinte**.

```raku
say 'abc123' ~~ / <-[a..z]> /;
```

{:.quiz}
1 | ｢1｣
0 | ｢a｣
0 | ｢abc｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Die Klasse `<-[a..z]>` trifft ein einzelnes Zeichen, das **kein** Kleinbuchstabe ist. Durchläuft man `abc123` von links, sind die ersten drei Zeichen Kleinbuchstaben und werden übersprungen; das erste Zeichen, das kein Kleinbuchstabe ist, ist die Ziffer `1`, der Treffer ist also `｢1｣`.

</div>

{% include nav.html %}
