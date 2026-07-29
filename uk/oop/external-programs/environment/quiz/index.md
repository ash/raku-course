---
title: 'Тест — Середовище'
translations_gpt:
---

{% include menu.html %}

Яка змінна містить змінні середовища програми?

{:.quiz}
0 | `@*ARGS`
1 | `%*ENV`
0 | `$*ENV`
0 | `%ENV`

{% include quiz.html %}

<div class="extended-explanation">

`%*ENV` є динамічним хешем змінних середовища, які читають за іменем як `%*ENV<HOME>`. `@*ARGS` натомість містить аргументи командного рядка.

</div>

{% include nav.html %}
