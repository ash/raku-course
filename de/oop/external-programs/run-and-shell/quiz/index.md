---
title: 'Quiz — Programme ausführen'
translations_gpt:
---

{% include menu.html %}

Welche Funktion reicht ihren Befehl an die System-**Shell** weiter und erlaubt damit Pipes und Umleitungen?

{:.quiz}
0 | `run`
1 | `shell`
0 | `exec`
0 | `system`

{% include quiz.html %}

<div class="extended-explanation">

`shell` übergibt eine einzelne Zeichenkette an die Shell, die Möglichkeiten wie Pipes auswertet. `run` startet ein Programm unmittelbar mit getrennten Argumenten und ohne Shell, was sicherer und die bessere Standardwahl ist.

</div>

{% include nav.html %}
