---
title: Quiz — Ruoli
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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
0 | un errore

{% include quiz.html %}

{% include nav.html %}
