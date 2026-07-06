---
title: 'Quiz — `spurt` and `slurp`'
---

{% include menu.html %}

What does the following program print?

```raku
spurt 'f.txt', "A\n";
spurt 'f.txt', "B\n";

print slurp 'f.txt';
```

{:.quiz}
0 | A
1 | B
0 | A and B on two lines
0 | nothing

{% include quiz.html %}

{% include nav.html %}
