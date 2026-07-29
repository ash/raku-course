---
title: 'Тест — Створення граматик'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

`.parse` успішний лише тоді, коли граматика зіставляється з **усім** рядком. `\w+` зіставляється з `hello`, але далі залишаються пробіл та `world`, тож вхідний текст спожито не повністю: `.parse` повертає `Nil`, а `.defined` дає `False`.

</div>

{% include nav.html %}
