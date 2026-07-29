---
title: Тест — Прагмы
translations_gpt:
---

{% include menu.html %}

При включённой по умолчанию прагме `strict` в Raku, что произойдёт, если присвоить значение переменной, которую вы никогда не объявляли, например `$x = 42`?

{:.quiz}
1 | It is a compile-time error
0 | It silently creates `$x`
0 | It prints a warning but runs
0 | It sets `$x` to `Nil`

{% include quiz.html %}

<div class="extended-explanation">

`strict` включена по умолчанию и требует, чтобы каждая переменная была сначала объявлена с `my`, поэтому голое `$x = 42` не скомпилируется -- *Variable '$x' is not declared*. Отключение прагмы с помощью `no strict` позволило бы выполнить это присваивание.

</div>

{% include nav.html %}
