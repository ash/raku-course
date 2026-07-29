---
title: Тест — Дистрибутивы
translations_gpt:
---

{% include menu.html %}

Какой файл описывает дистрибутив Raku — его имя, версию и то, что он предоставляет?

{:.quiz}
0 | `README.md`
1 | `META6.json`
0 | `Makefile`
0 | `distribution.cfg`

{% include quiz.html %}

<div class="extended-explanation">

Дистрибутив описывается файлом `META6.json` — JSON-файлом в его корневой директории. Ключ `provides` сопоставляет имя каждого модуля с его исходным файлом, а `depends` перечисляет другие дистрибутивы, от которых он зависит.

</div>

{% include nav.html %}
