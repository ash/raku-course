---
title: 'Тест — Ролі'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

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
0 | помилку

{% include quiz.html %}

{% include nav.html %}
