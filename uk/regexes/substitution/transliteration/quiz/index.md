---
title: 'Тест — Підстановка'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
my $s = 'hello';
$s ~~ tr/l/L/;
say $s;
```

{:.quiz}
0 | hello
0 | heLo
1 | heLLo
0 | LLLLL

{% include quiz.html %}

<div class="extended-explanation">

`tr///` замінює символи один за одним і, на відміну від `s///`, змінює **кожен** відповідний символ без потреби в `:g`. Обидві літери `l` у `hello` стають `L`, і виходить `heLLo`.

</div>

{% include nav.html %}
