---
title: Quiz — Valores enumerationum
translations_gpt:
---

{% include menu.html %}

Quid sequens programma imprimit?

```raku
enum Day (Mon => 1, Tue => 2);
say Tue.key;
```

{:.quiz}
1 | Tue
0 | 2
0 | 1
0 | Mon

{% include quiz.html %}

<div class="extended-explanation">

`.value` numerum post constantem dat, sed `.key` eius *nomen* ut seriem characterum reddit. Itaque `Tue.key` est `Tue`, quocumque numero `2` ei assignato.

</div>

{% include nav.html %}
