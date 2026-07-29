---
title: 'Тест — Спеціальні змінні'
translations_gpt:
---

{% include menu.html %}

Яка вбудована змінна містить аргументи командного рядка програми?

{:.quiz}
0 | `$*ARGS`
1 | `@*ARGS`
0 | `@*ARGV`
0 | `%*ENV`

{% include quiz.html %}

<div class="extended-explanation">

Аргументи командного рядка надходять як *список*, тож змінна має сигіл `@` і динамічний твіґіл `*`: `@*ARGS`. `%*ENV` — це хеш середовища, а не аргументи, а `@*ARGV` — запис із Perl, якого Raku не використовує.

</div>

{% include nav.html %}
