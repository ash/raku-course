---
title: 'Тест — Создание грамматик'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
grammar Word {
    token TOP { \w+ }
}

say Word.parse('hello world').defined;
```

{:.quiz}
0 | True
1 | False
0 | ｢hello｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`.parse` срабатывает, только когда грамматика сопоставляется со **всей** строкой. `\w+` совпадает
с `hello`, но затем остаются пробел и `world`, то есть ввод израсходован не полностью: `.parse`
возвращает `Nil`, и `.defined` даёт `False`.

</div>

{% include nav.html %}
