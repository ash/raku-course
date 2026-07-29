---
title: Тест — Пакеты
translations_gpt:
---

{% include menu.html %}

Что напечатает следующая программа?

```raku
module M {
    my $x = 5;
}

say $M::x.defined;
```

{:.quiz}
1 | False
0 | True
0 | 5
0 | An error

{% include quiz.html %}

<div class="extended-explanation">

`$x` объявлена с помощью `my`, поэтому она является лексической и никогда не попадает в пространство имён `M`. Путь `$M::x` поэтому ничего не находит — неопределённое значение — и `.defined` возвращает `False`. Только переменная, объявленная с `our`, была бы доступна таким образом.

</div>

{% include nav.html %}
