---
title: Viktorīna — Klases
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma? Atcerieties, ka `WHAT` ziņo *tipu*, bet tipa objektu no instances atšķir `defined`.

```raku
class Dog {
}

say Dog.WHAT === Dog.new.WHAT;
```

{:.quiz}
0 | False
1 | True
0 | (Dog)
0 | kļūda

{% include quiz.html %}

{% include nav.html %}
