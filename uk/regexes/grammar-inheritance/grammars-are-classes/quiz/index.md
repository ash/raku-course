---
title: 'Тест — Успадкування граматик'
translations_gpt:
---

{% include menu.html %}

Яке ключове слово змушує одну граматику успадковувати іншу?

{:.quiz}
1 | `is`
0 | `does`
0 | `extends`
0 | `inherits`

{% include quiz.html %}

<div class="extended-explanation">

Граматика є різновидом класу, тож вона використовує те саме ключове слово успадкування: `grammar Loud is Base { … }`. Похідна граматика успадковує токени базової та може перевизначати окремі з них.

</div>

{% include nav.html %}
