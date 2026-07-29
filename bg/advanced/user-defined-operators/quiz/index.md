---
title: Тест — Дефиниране на оператор
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
sub infix:<times>($a, $b) { $a * $b }

say 6 times 7;
```

{:.quiz}
1 | 42
0 | 67
0 | times
0 | грешка

{% include quiz.html %}

<div class="extended-explanation">

`infix:<times>` дефинира нов оператор, който се пише между двата си операнда. Тялото му ги умножава, така че `6 times 7` се изчислява до `42` — операторът е просто подпрограма със специално име.

</div>

{% include nav.html %}
