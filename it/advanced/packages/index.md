---
title: Pacchetti e namespace
translations_gpt: true
---

{% include menu.html %}

Un _namespace_ è un contenitore con un nome per altri elementi con nome, come variabili e subroutine. Impedisce ai nomi di entrare in conflitto: `Maths::pi` e `Physics::pi` possono coesistere senza problemi. Un _package_ è il tipo più basilare di namespace.

Hai già utilizzato un namespace senza dargli un nome: ogni `module` ne crea uno. Questa sezione esamina i package direttamente e come le variabili `our` e il separatore `::` permettono di accedere a un namespace dall'esterno.

{% include nav.html %}
