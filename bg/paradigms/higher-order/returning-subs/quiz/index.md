---
title: 'Тест — Функции от по-висок ред'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

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

`prefixer('Hi, ')` връща подпрограма, която помни представката и я долепя пред каквото ѝ дадат. Съхранена в `&hi` и извикана с `'Bob'`, тя връща `Hi, Bob` — върнатата подпрограма работи също толкова добре с низове, колкото и с числа.

</div>

{% include nav.html %}
