---
title: 'Тест — Операторът s///'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

Без наречието `:g` операторът `s///` заменя само **първото** съвпадение. Затова на `three` се превръща само първото `two` и се получава `one three two`. С `s:g///` биха се променили и двете появявания.

</div>

{% include nav.html %}
