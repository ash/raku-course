---
title: 'Quiz — `spurt` et `slurp`'
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
spurt 'f.txt', "A\n";
spurt 'f.txt', "B\n";

print slurp 'f.txt';
```

{:.quiz}
0 | A
1 | B
0 | A et B duabus lineis
0 | nihil

{% include quiz.html %}

{% include nav.html %}
