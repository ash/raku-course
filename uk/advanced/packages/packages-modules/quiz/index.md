---
title: 'Тест — Пакунки'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

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
0 | Помилку

{% include quiz.html %}

<div class="extended-explanation">

`$x` оголошено через `my`, тож вона є лексичною й ніколи не потрапляє до простору імен `M`. Отже, шлях `$M::x` нічого не знаходить — це невизначене значення, — і `.defined` дає `False`. Дістатися так можна було б лише до змінної, оголошеної через `our`.

</div>

{% include nav.html %}
