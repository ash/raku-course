---
title: 'Тест — Функции высшего порядка'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

`prefixer('Hi, ')` возвращает подпрограмму, которая помнит приставку и приписывает её к тому, что
ей дадут. Сохранённая в `&hi` и вызванная с `'Bob'`, она возвращает `Hi, Bob`: возвращённая
подпрограмма работает со строками не хуже, чем с числами.

</div>

{% include nav.html %}
