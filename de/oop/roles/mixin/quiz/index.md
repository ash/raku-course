---
title: 'Quiz — Rollen'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
role Flyer {
    method fly { 'up we go' }
}

class Bird does Flyer {
}

say Bird.new.fly;
```

{:.quiz}
0 | Flyer
1 | up we go
0 | True
0 | ein Fehler

{% include quiz.html %}

{% include nav.html %}
