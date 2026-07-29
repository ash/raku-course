---
title: 'Тест — Атрибути'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

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
1 | (Any) | Програма хоче вивести `y`, якому ніколи не задавали значення
0 | помилку

{% include quiz.html %}

{% include nav.html %}
