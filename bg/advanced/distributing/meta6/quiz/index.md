---
title: Тест — Дистрибуции
translations_gpt:
---

{% include menu.html %}

Кой файл описва дистрибуция на Raku -- нейното име, версия и какво предоставя?

{:.quiz}
0 | `README.md`
1 | `META6.json`
0 | `Makefile`
0 | `distribution.cfg`

{% include quiz.html %}

<div class="extended-explanation">

Дистрибуцията се описва от `META6.json` -- JSON файл в нейната главна директория. Ключът `provides` свързва всяко име на модул с неговия изходен файл, а `depends` изброява другите дистрибуции, от които тя зависи.

</div>

{% include nav.html %}
