---
title: 'Тест — `spurt` та `slurp`'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
spurt 'f.txt', "A\n";
spurt 'f.txt', "B\n";

print slurp 'f.txt';
```

{:.quiz}
0 | A
1 | B
0 | A та B у двох рядках
0 | нічого

{% include quiz.html %}

{% include nav.html %}
