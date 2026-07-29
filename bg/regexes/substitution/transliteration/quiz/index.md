---
title: 'Тест — Заместване'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

`tr///` заменя знаци един за друг и за разлика от `s///` променя **всеки** съвпадащ знак, без да се нуждае от `:g`. И двете `l` в `hello` стават `L`, което дава `heLLo`.

</div>

{% include nav.html %}
