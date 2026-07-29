---
title: 'Тест — Сокети'
translations_gpt:
---

{% include menu.html %}

Який основний клас Raku відкриває мережеве з'єднання TCP?

{:.quiz}
1 | `IO::Socket::INET`
0 | `IO::Path`
0 | `Channel`
0 | `Supply`

{% include quiz.html %}

<div class="extended-explanation">

`IO::Socket::INET` є основним класом для TCP-сокетів. Він працює і як клієнт (приєднуючись до сервера), і як сервер (слухаючи з'єднання), і не потребує додаткових модулів.

</div>

{% include nav.html %}
