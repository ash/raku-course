---
title: Тест — gist и Str
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my @a = 1, 2, 3;
say @a.Str;
```

{:.quiz}
0 | [1 2 3]
1 | 1 2 3
0 | (1 2 3)
0 | 1, 2, 3

{% include quiz.html %}

<div class="extended-explanation">

`.Str` дава формата на обикновен низ, при която елементите просто се свързват с интервали без скоби: `1 2 3`. Формата със скоби `[1 2 3]` е тази, която `.gist` (и следователно `say @a`) би произвел.

</div>

{% include nav.html %}
