---
title: Тест — Теги экспорта
translations_gpt:
---

{% include menu.html %}

Модуль объявляет `sub hello is export` и `sub goodbye is export(:partings)`. После `use Greeting :partings;` какие подпрограммы программа может вызвать напрямую?

{:.quiz}
1 | Только `goodbye`
0 | Только `hello`
0 | И `hello`, и `goodbye`
0 | Ни одну из них

{% include quiz.html %}

<div class="extended-explanation">

Указание тега импортирует эту группу *вместо* группы по умолчанию, поэтому `:partings` подключает `goodbye`, но оставляет `hello` за бортом. Чтобы получить обе, нужно запросить встроенный тег `:ALL` с помощью `use Greeting :ALL;`.

</div>

{% include nav.html %}
