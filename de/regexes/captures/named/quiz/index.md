---
title: 'Quiz — Captures'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
if 'ab12cd' ~~ / (\w+) (\d+) / {
    say "$0 $1";
}
```

{:.quiz}
0 | ab 12
1 | ab1 2
0 | ab12 cd
0 | 12 ab

{% include quiz.html %}

<div class="extended-explanation">

Das gierige `\w+` trifft so viele Wortzeichen, wie es kann, und lässt dabei noch mindestens eine Ziffer für `\d+` übrig. Es nimmt `ab1`, und `\d+` trifft dann die einzige verbleibende Ziffer `2`. Also ist `$0` gleich `ab1` und `$1` gleich `2`.

</div>

{% include nav.html %}
