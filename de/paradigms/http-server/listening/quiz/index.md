---
title: 'Quiz — Lauschen'
translations_gpt:
---

{% include menu.html %}

Welches Argument lässt `IO::Socket::INET` auf hereinkommende Verbindungen warten, statt zu einem Server hinauszuwählen?

{:.quiz}
1 | `:listen`
0 | `:host`
0 | `:server`
0 | `:accept`

{% include quiz.html %}

<div class="extended-explanation">

`:listen` versetzt den Socket in den Servermodus, wartend auf einer lokalen Adresse und einem Port. Sie rufen dann `.accept` auf, um jede hereinkommende Verbindung anzunehmen. (`.accept` ist eine Methode, kein Konstruktorargument.)

</div>

{% include nav.html %}
