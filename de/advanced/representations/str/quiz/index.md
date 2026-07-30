---
title: Quiz — gist und Str
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my @a = 1, 2, 3;
say @a.Str;
```

{:.quiz}
0 | [1 2 3]
1 | 1 2 3
0 | (1 2 3)
0 | 1, 2, 3

{% include quiz.html %}

<div class="extended-explanation">

`.Str` gibt die einfache Stringform zurück, bei der die Elemente einfach durch Leerzeichen ohne Klammern verbunden werden: `1 2 3`. Die Form mit Klammern `[1 2 3]` ist das, was `.gist` (und somit `say @a`) erzeugen würde.

</div>

{% include nav.html %}
