---
title: 'Тест — Роли'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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
0 | грешка

{% include quiz.html %}

{% include nav.html %}
