---
title: Тест — Методы класса
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа? Метод `n` не использует атрибутов.

```raku
class T {
    method n { 42 }
}

say T.n + T.new.n;
```

{:.quiz}
0 | 42
1 | 84
0 | (T)
0 | ошибка

{% include quiz.html %}

{% include nav.html %}
