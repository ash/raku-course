---
title: 'Тест — Промисы'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
my $p = start { 100 / 4 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 100
1 | 25
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`start` выполняет блок в фоне и возвращает промис. `await` дожидается его и возвращает результат
блока — `100 / 4`, то есть `25`.

</div>

{% include nav.html %}
