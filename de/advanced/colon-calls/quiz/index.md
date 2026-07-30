---
title: Quiz — Der Doppelpunkt-Aufruf
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
say 'programming'.substr: 0, 3;
```

{:.quiz}
1 | pro
0 | program
0 | ing
0 | (0 3)

{% include quiz.html %}

<div class="extended-explanation">

Der Doppelpunkt verbraucht den *gesamten* Rest der Anweisung als Argumentliste, sodass `substr: 0, 3` dasselbe ist wie `substr(0, 3)` — beide Argumente werden übergeben. Ab Index `0` werden `3` Zeichen genommen, was `pro` ergibt.

</div>

{% include nav.html %}
