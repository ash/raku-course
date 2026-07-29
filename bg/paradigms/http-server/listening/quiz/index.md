---
title: 'Тест — Слушане'
translations_gpt:
---

{% include menu.html %}

Кой аргумент кара `IO::Socket::INET` да чака входящи връзки, вместо да набира навън към сървър?

{:.quiz}
1 | `:listen`
0 | `:host`
0 | `:server`
0 | `:accept`

{% include quiz.html %}

<div class="extended-explanation">

`:listen` поставя сокета в сървърен режим, чакащ на локален адрес и порт. После извиквате `.accept`, за да вземете всяка входяща връзка. (`.accept` е метод, а не аргумент на конструктора.)

</div>

{% include nav.html %}
