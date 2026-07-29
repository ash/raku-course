---
title: 'Тест — Методи на класа'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма? Методът `n` не използва никакви атрибути.

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
0 | грешка

{% include quiz.html %}

{% include nav.html %}
