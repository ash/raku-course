---
title: 'Тест — Лямбди'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
my &f = -> $x { $x + $x };
say f(9);
```

{:.quiz}
0 | 9
1 | 18
0 | 81
0 | 99

{% include quiz.html %}

<div class="extended-explanation">

Гострий блок є лямбдою, що додає свій аргумент до самого себе. Викликана з `9`, вона повертає `9 + 9`, тобто `18`.

</div>

{% include nav.html %}
