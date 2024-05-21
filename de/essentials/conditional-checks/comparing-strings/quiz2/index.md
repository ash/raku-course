---
title: Quiz 2 — die Bedingung in if
---

{% include menu.html %}

Korrigieren Sie das Programm und beantworten Sie die Frage.

{:.quiz-code .fill}
. | my $password = prompt 'Geben Sie Ihr Passwort ein: ';
. | 
eq = | if $password ␣␣ '*&(#&$#Y' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Richtig';
. | }
. | else {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Falsch';
. | }


Was macht dieses Programm mit dem `=` im Test?

{:.quiz-select}
Druckt immer „Richtig“ | Ihre Antwort:&nbsp; (: Druckt immer „Richtig“, Druckt immer „Falsch“, Druckt „Richtig“ für richtige Passwörter und „Falsch“ für falsche, Druckt „Falsch“ für richtige Passwörter und „Richtig“ für falsche :)

<div class="extended-explanation">Das Programm druckt immer „Richtig“, weil <code>$password = '*&(#&$#Y'</code> eine Zuweisung ist, die den neuen Wert der <code>$password</code>-Variablen festlegt. Da der Wert weder null noch eine leere Zeichenkette ist, wird er als <code>True</code> betrachtet. Das vom Benutzer eingegebene Passwort wird in diesem Fall nie überprüft.<br/><br/>Wenn Sie <code>==</code> eingeben, wird das Programm fehlschlagen, da es versucht, die Zeichenketten (das Benutzerpasswort und das richtige Passwort) in Zahlen umzuwandeln und dabei scheitert.</div>

{% include quiz.html %}

{% include nav.html %}