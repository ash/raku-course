---
title: 'Тест — Классы действий'
translations_gpt:
---

{% include menu.html %}

Как сказать `.parse`, чтобы он использовал класс действий по имени `MyActions`?

{:.quiz}
0 | `Grammar.parse($str, MyActions)`
1 | `Grammar.parse($str, actions => MyActions.new)`
0 | `Grammar.parse($str).MyActions`
0 | `Grammar.parse($str, action => MyActions)`

{% include quiz.html %}

<div class="extended-explanation">

Объект действий передаётся именованным аргументом `actions`, и это должен быть **экземпляр**,
созданный через `.new`. По мере разбора выполняются соответствующие методы токенов у этого
экземпляра и строят результат.

</div>

{% include nav.html %}
