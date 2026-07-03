---
title: 'Quiz — Type constraints'
---

{% include menu.html %}

A container is declared as follows:

```raku
my Int $int;
```

Which one of the assignments below causes a compile-time error?

{:.quiz}
0 | $int = 123;
0 | $int = 100 + 23;
0 | $int = '123'.Int;
1 | $int = 123.45;

{% include quiz.html %}

{% include nav.html %}
