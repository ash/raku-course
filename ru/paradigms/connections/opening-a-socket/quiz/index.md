---
title: 'Тест — Сокеты'
translations_gpt:
---

{% include menu.html %}

Какой встроенный класс Raku открывает сетевое TCP-соединение?

{:.quiz}
1 | `IO::Socket::INET`
0 | `IO::Path`
0 | `Channel`
0 | `Supply`

{% include quiz.html %}

<div class="extended-explanation">

`IO::Socket::INET` — основной класс для TCP-сокетов. Он работает и как клиент (подключаясь
к серверу), и как сервер (ожидая соединений), и не требует дополнительных модулей.

</div>

{% include nav.html %}
