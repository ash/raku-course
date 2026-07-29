---
title: 'Тест — Функції вищого порядку'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
sub prefixer($p) {
    sub ($s) { $p ~ $s };
}

my &hi = prefixer('Hi, ');
say hi('Bob');
```

{:.quiz}
1 | Hi, Bob
0 | Bob
0 | Hi, 
0 | Hi, Hi, 

{% include quiz.html %}

<div class="extended-explanation">

`prefixer('Hi, ')` повертає підпрограму, що пам'ятає префікс і додає його спереду до того, що їй дадуть. Збережена в `&hi` і викликана з `'Bob'`, вона повертає `Hi, Bob` — повернена підпрограма так само добре працює з рядками, як і з числами.

</div>

{% include nav.html %}
