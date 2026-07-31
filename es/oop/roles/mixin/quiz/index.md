---
title: Quiz — Roles
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

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
0 | un error

{% include quiz.html %}

{% include nav.html %}
