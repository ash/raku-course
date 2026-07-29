---
title: 'Тест — Наследование грамматик'
translations_gpt:
---

{% include menu.html %}

Какое ключевое слово заставляет одну грамматику наследовать от другой?

{:.quiz}
1 | `is`
0 | `does`
0 | `extends`
0 | `inherits`

{% include quiz.html %}

<div class="extended-explanation">

Грамматика — разновидность класса, поэтому она использует то же ключевое слово наследования:
`grammar Loud is Base { … }`. Производная грамматика затем наследует токены базовой и может
переопределять отдельные из них.

</div>

{% include nav.html %}
