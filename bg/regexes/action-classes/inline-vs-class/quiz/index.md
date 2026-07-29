---
title: 'Тест — Класове за действия'
translations_gpt:
---

{% include menu.html %}

Как казвате на `.parse` да използва клас за действия на име `MyActions`?

{:.quiz}
0 | `Grammar.parse($str, MyActions)`
1 | `Grammar.parse($str, actions => MyActions.new)`
0 | `Grammar.parse($str).MyActions`
0 | `Grammar.parse($str, action => MyActions)`

{% include quiz.html %}

<div class="extended-explanation">

Обектът с действия се подава чрез именувания аргумент `actions` и трябва да бъде **екземпляр**, създаден с `.new`. Докато граматиката разбира текста, върху този екземпляр се изпълняват съответните методи на токените и изграждат резултата.

</div>

{% include nav.html %}
