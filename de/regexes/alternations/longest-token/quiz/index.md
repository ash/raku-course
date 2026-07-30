---
title: 'Quiz — Alternativen'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus? Beachten Sie den einfachen Strich `|`.

```raku
say 'download' ~~ / down | download /;
```

{:.quiz}
1 | ｢download｣
0 | ｢down｣
0 | ｢load｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Der einfache Strich `|` verwendet longest-token matching: Treffen mehrere Alternativen an derselben Stelle, gewinnt die längste. Obwohl `down` zuerst geschrieben steht und treffen würde, zieht `|` das längere `download` vor. Mit `||` hätte `down` gewonnen.

</div>

{% include nav.html %}
