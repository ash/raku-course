---
title: Тест — Ограничения на типове
translations_gpt:
---

{% include menu.html %}

Контейнер е деклариран по следния начин:

```raku
my Int $int;
```

Кое от присвояванията по-долу предизвиква грешка по време на компилация?

{:.quiz}
0 | $int = 123;
0 | $int = 100 + 23;
0 | $int = '123'.Int;
1 | $int = 123.45;

{% include quiz.html %}

{% include nav.html %}
