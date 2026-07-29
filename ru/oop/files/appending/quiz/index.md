---
title: Тест — `spurt` и `slurp`
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
spurt 'f.txt', "A\n";
spurt 'f.txt', "B\n";

print slurp 'f.txt';
```

{:.quiz}
0 | A
1 | B
0 | A и B на двух строках
0 | ничего

{% include quiz.html %}

{% include nav.html %}
