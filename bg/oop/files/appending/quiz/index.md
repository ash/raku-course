---
title: 'Тест — `spurt` и `slurp`'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
spurt 'f.txt', "A\n";
spurt 'f.txt', "B\n";

print slurp 'f.txt';
```

{:.quiz}
0 | A
1 | B
0 | A и B на два реда
0 | нищо

{% include quiz.html %}

{% include nav.html %}
