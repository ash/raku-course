---
title: 'Тест — Ожидание соединений'
translations_gpt:
---

{% include menu.html %}

Какой аргумент заставляет `IO::Socket::INET` ждать входящих соединений вместо того, чтобы самому
звонить серверу?

{:.quiz}
1 | `:listen`
0 | `:host`
0 | `:server`
0 | `:accept`

{% include quiz.html %}

<div class="extended-explanation">

`:listen` переводит сокет в режим сервера, ожидающего на локальном адресе и порту. Затем вы
вызываете `.accept`, чтобы принять каждое входящее соединение. (`.accept` — метод, а не аргумент
конструктора.)

</div>

{% include nav.html %}
