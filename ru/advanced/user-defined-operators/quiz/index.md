---
title: Тест — Определение оператора
translations_gpt:
---

{% include menu.html %}

Что напечатает следующая программа?

```raku
sub infix:<times>($a, $b) { $a * $b }

say 6 times 7;
```

{:.quiz}
1 | 42
0 | 67
0 | times
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

`infix:<times>` определяет новый оператор, который записывается между двумя операндами. Его тело умножает их, поэтому `6 times 7` вычисляется как `42` — оператор является просто подпрограммой с особым именем.

</div>

{% include nav.html %}
