---
title: Quiz — Partes
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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
0 | errorem

{% include quiz.html %}

{% include nav.html %}
