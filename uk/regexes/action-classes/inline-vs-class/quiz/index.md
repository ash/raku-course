---
title: 'Тест — Класи дій'
translations_gpt:
---

{% include menu.html %}

Як сказати `.parse` використовувати клас дій з іменем `MyActions`?

{:.quiz}
0 | `Grammar.parse($str, MyActions)`
1 | `Grammar.parse($str, actions => MyActions.new)`
0 | `Grammar.parse($str).MyActions`
0 | `Grammar.parse($str, action => MyActions)`

{% include quiz.html %}

<div class="extended-explanation">

Об'єкт дій передають через іменований аргумент `actions`, і він має бути **примірником**, створеним за допомогою `.new`. Поки граматика розбирає текст, на цьому примірнику виконуються відповідні методи токенів і будують результат.

</div>

{% include nav.html %}
