---
title: 'Тест — Сокети'
translations_gpt:
---

{% include menu.html %}

Кой основен клас на Raku отваря мрежова връзка по TCP?

{:.quiz}
1 | `IO::Socket::INET`
0 | `IO::Path`
0 | `Channel`
0 | `Supply`

{% include quiz.html %}

<div class="extended-explanation">

`IO::Socket::INET` е основният клас за TCP сокети. Той работи и като клиент (свързвайки се със сървър), и като сървър (слушайки за връзки), и не се нуждае от допълнителни модули.

</div>

{% include nav.html %}
