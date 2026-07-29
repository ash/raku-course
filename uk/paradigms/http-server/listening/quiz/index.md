---
title: 'Тест — Слухання'
translations_gpt:
---

{% include menu.html %}

Який аргумент змушує `IO::Socket::INET` чекати вхідних з'єднань замість набирати сервер назовні?

{:.quiz}
1 | `:listen`
0 | `:host`
0 | `:server`
0 | `:accept`

{% include quiz.html %}

<div class="extended-explanation">

`:listen` переводить сокет у режим сервера, коли той чекає на локальній адресі та порту. Далі ви викликаєте `.accept`, щоб узяти кожне вхідне з'єднання. (`.accept` є методом, а не аргументом конструктора.)

</div>

{% include nav.html %}
