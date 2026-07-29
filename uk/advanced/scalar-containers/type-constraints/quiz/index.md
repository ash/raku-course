---
title: 'Тест — Обмеження типів'
translations_gpt:
---

{% include menu.html %}

Контейнер оголошено так:

```raku
my Int $int;
```

Яке з наведених нижче присвоєнь спричиняє помилку під час компіляції?

{:.quiz}
0 | $int = 123;
0 | $int = 100 + 23;
0 | $int = '123'.Int;
1 | $int = 123.45;

{% include quiz.html %}

{% include nav.html %}
