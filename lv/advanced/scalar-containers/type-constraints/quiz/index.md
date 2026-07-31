---
title: Viktorīna — Tipu ierobežojumi
---

{% include menu.html %}

Konteineris ir deklarēts šādi:

```raku
my Int $int;
```

Kura no zemāk redzamajām piešķiršanām izraisa kompilācijas laika kļūdu?

{:.quiz}
0 | $int = 123;
0 | $int = 100 + 23;
0 | $int = '123'.Int;
1 | $int = 123.45;

{% include quiz.html %}

{% include nav.html %}
