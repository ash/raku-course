---
title: 'Тест — Подстановка'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

`tr///` заменяет символы один на один и, в отличие от `s///`, изменяет **каждый** подходящий
символ, не нуждаясь в `:g`. Обе буквы `l` в слове `hello` становятся `L`, и получается `heLLo`.

</div>

{% include nav.html %}
