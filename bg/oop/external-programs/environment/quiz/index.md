---
title: 'Тест — Средата'
translations_gpt:
---

{% include menu.html %}

Коя променлива съдържа променливите на средата на програмата?

{:.quiz}
0 | `@*ARGS`
1 | `%*ENV`
0 | `$*ENV`
0 | `%ENV`

{% include quiz.html %}

<div class="extended-explanation">

`%*ENV` е динамичният хеш с променливите на средата, четен по име като `%*ENV<HOME>`. `@*ARGS` вместо това съдържа аргументите от командния ред.

</div>

{% include nav.html %}
