---
title: Quiz — Typus limitationes
---

{% include menu.html %}

Continens hoc modo declaratur:

```raku
my Int $int;
```

Quae ex assignationibus infra errorem tempore compilationis causat?

{:.quiz}
0 | $int = 123;
0 | $int = 100 + 23;
0 | $int = '123'.Int;
1 | $int = 123.45;

{% include quiz.html %}

{% include nav.html %}
