---
title: Тест — Атрибуты
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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
1 | (Any) | Программа печатает `y`, которому так и не задали значение
0 | ошибка

{% include quiz.html %}

{% include nav.html %}
