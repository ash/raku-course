---
title: Тест — Нативни типове
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my int $n = 42;
say $n.^name;
```

{:.quiz}
1 | Int
0 | int
0 | (Int)
0 | Num

{% include quiz.html %}

<div class="extended-explanation">

Когато правите интроспекция на нативна стойност, тя автоматично се *обвива* в съответния пълен тип. Така че въпреки че `$n` е декларирана като нативен `int`, запитването за името на типа чрез `.^name` показва обвития `Int`.

</div>

{% include nav.html %}
