---
title: 'Тест — Създаване на граматики'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

`.parse` успява само когато граматиката съвпадне с **целия** низ. `\w+` съвпада с `hello`, но после остават интервал и `world`, така че входът не е погълнат докрай: `.parse` връща `Nil`, а `.defined` дава `False`.

</div>

{% include nav.html %}
