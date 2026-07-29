---
title: 'Тест — Оператор s///'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
my $s = 'one two two';
$s ~~ s/two/three/;
say $s;
```

{:.quiz}
1 | one three two
0 | one three three
0 | one two two
0 | three two two

{% include quiz.html %}

<div class="extended-explanation">

Без наречия `:g` оператор `s///` заменяет только **первое** совпадение. Поэтому в `three`
превращается лишь первое `two`, и получается `one three two`. С `s:g///` изменились бы оба
вхождения.

</div>

{% include nav.html %}
