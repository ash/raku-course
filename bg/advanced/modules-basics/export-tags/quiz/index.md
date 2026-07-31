---
title: Тест — Тагове за експортиране
translations_gpt:
---

{% include menu.html %}

Модул декларира `sub hello is export` и `sub goodbye is export(:partings)`. След `use Greeting :partings;`, кои подпрограми може програмата да извика директно?

{:.quiz}
1 | Само `goodbye`
0 | Само `hello`
0 | И `hello`, и `goodbye`
0 | Нито една от двете

{% include quiz.html %}

<div class="extended-explanation">

Посочването на таг импортира тази група *вместо* групата по подразбиране, така че `:partings` внася `goodbye`, но оставя `hello` настрана. За да получите и двете, трябва да поискате вградения таг `:ALL` с `use Greeting :ALL;`.

</div>

{% include nav.html %}
