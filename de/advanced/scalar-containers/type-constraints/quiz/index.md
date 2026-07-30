---
title: Quiz — Typbeschränkungen
---

{% include menu.html %}

Ein Container wird wie folgt deklariert:

```raku
my Int $int;
```

Welche der folgenden Zuweisungen verursacht einen Kompilierzeitfehler?

{:.quiz}
0 | $int = 123;
0 | $int = 100 + 23;
0 | $int = '123'.Int;
1 | $int = 123.45;

{% include quiz.html %}

{% include nav.html %}
