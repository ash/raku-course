---
title: 'Тест — Дистрибутиви'
translations_gpt:
---

{% include menu.html %}

Який файл описує дистрибутив Raku — його назву, версію й те, що він надає?

{:.quiz}
0 | `README.md`
1 | `META6.json`
0 | `Makefile`
0 | `distribution.cfg`

{% include quiz.html %}

<div class="extended-explanation">

Дистрибутив описується файлом `META6.json` — файлом JSON у його верхньому каталозі. Його ключ `provides` зіставляє ім'я кожного модуля з файлом вихідного коду, а `depends` перелічує інші дистрибутиви, які йому потрібні.

</div>

{% include nav.html %}
