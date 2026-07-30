---
title: 'Quiz — Alternatieven'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af? Let op de enkele streep `|`.

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

De enkele streep `|` gebruikt longest-token matching: wanneer meer dan één alternatief op dezelfde plek matcht, wint het langste. Ook al staat `down` eerst en zou het matchen, `|` geeft de voorkeur aan het langere `download`. Met `||` zou `down` gewonnen hebben.

</div>

{% include nav.html %}
