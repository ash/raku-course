---
title: Тест — Наречия индексации
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

Наречие `:exists` проверяет, присутствует ли ключ, и возвращает булево значение. Ключа `z` в хеше нет, поэтому ответ — `False`.

</div>

{% include nav.html %}
