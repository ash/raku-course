---
title: 'Quiz — Roles'
---

{% include menu.html %}

What does the following program print?

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
0 | an error

{% include quiz.html %}

{% include nav.html %}
