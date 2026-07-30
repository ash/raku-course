---
title: 'Quiz — Rollen'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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
0 | een fout

{% include quiz.html %}

{% include nav.html %}
