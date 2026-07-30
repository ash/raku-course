---
title: 'Quiz — Klassen'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus? Denken Sie daran, dass `WHAT` den *Typ* meldet, während `defined` ein Typobjekt von einer Instanz unterscheidet.

```raku
class Dog {
}

say Dog.WHAT === Dog.new.WHAT;
```

{:.quiz}
0 | False
1 | True
0 | (Dog)
0 | ein Fehler

{% include quiz.html %}

{% include nav.html %}
