---
title: 'Тест — Атрибути'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
class P {
    has $.x = 7;
    has $.y;
}

say P.new(x => 1).y;
```

{:.quiz}
0 | 1
0 | 7
1 | (Any) | Програмата иска да отпечата `y`, който така и не е зададен
0 | грешка

{% include quiz.html %}

{% include nav.html %}
