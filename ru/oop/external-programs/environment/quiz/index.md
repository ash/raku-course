---
title: 'Тест — Переменные окружения'
translations_gpt:
---

{% include menu.html %}

В какой переменной хранятся переменные окружения программы?

{:.quiz}
0 | `@*ARGS`
1 | `%*ENV`
0 | `$*ENV`
0 | `%ENV`

{% include quiz.html %}

<div class="extended-explanation">

`%*ENV` — это динамический хеш переменных окружения, который читают по имени как `%*ENV<HOME>`.
В `@*ARGS` вместо этого хранятся аргументы командной строки.

</div>

{% include nav.html %}
