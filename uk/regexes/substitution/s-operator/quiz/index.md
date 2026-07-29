---
title: 'Тест — Оператор s///'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

Без прислівника `:g` оператор `s///` замінює лише **перший** збіг. Тож на `three` перетворюється тільки перше `two`, і виходить `one three two`. З `s:g///` змінилися б обидва входження.

</div>

{% include nav.html %}
