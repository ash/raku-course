---
title: Тест — Наречия за индексиране
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

{:.quiz}
0 | True
1 | False
0 | Nil
0 | (Any)

{% include quiz.html %}

<div class="extended-explanation">

Наречието `:exists` проверява дали ключът е наличен и връща булева стойност. В хеша няма ключ `z`, затова отговорът е `False`.

</div>

{% include nav.html %}
