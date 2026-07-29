---
title: 'Тест — Наследяване на граматики'
translations_gpt:
---

{% include menu.html %}

Коя ключова дума кара една граматика да наследява друга?

{:.quiz}
1 | `is`
0 | `does`
0 | `extends`
0 | `inherits`

{% include quiz.html %}

<div class="extended-explanation">

Граматиката е вид клас, така че използва същата ключова дума за наследяване: `grammar Loud is Base { … }`. Изведената граматика тогава наследява токените на базовата и може да предефинира отделни от тях.

</div>

{% include nav.html %}
