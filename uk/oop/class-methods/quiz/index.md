---
title: 'Тест — Методи класу'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма? Метод `n` не використовує жодних атрибутів.

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
0 | помилку

{% include quiz.html %}

{% include nav.html %}
