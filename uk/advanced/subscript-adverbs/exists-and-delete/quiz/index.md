---
title: 'Тест — Наріччя індексів'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

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

Наріччя `:exists` запитує, чи присутній ключ, і повертає булеве значення. Ключа `z` у хеші немає, тож відповідь — `False`.

</div>

{% include nav.html %}
