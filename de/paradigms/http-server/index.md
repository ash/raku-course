---
title: Ein einfacher HTTP-Server
translations_gpt:
---

{% include menu.html %}

Ein _Server_ ist die andere Seite einer Verbindung: Statt zu einer entfernten Maschine hinauszureichen, wartet er darauf, dass Clients zu ihm **hereinreichen**. Dieselbe Kernklasse, `IO::Socket::INET`, tut auch das — Sie versetzen sie nur in den Lauschmodus.

Dieser Abschnitt baut von Hand einen winzigen Webserver: auf eine Verbindung lauschen, die Anfrage lesen und eine HTTP-Antwort zurücksenden. Wie die früheren Socket-Beispiele müssen diese auf Ihrer eigenen Maschine laufen und mit einem Browser oder einem anderen Programm angesprochen werden.

{% include nav.html %}
