---
title: Quiz 2 — de conditie in if
---

{% include menu.html %}

Corrigeer het programma en beantwoord de vraag.

{:.quiz-code .fill}
. | my $password = prompt 'Voer je wachtwoord in: ';
. | 
eq = | if $password ␣␣ '*&(#&$#Y' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Correct';
. | }
. | else {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Incorrect';
. | }


Wat doet dit programma met de `=` in de test?

{:.quiz-select}
Print altijd ‘Correct’ | Jouw antwoord:&nbsp; (: Print altijd ‘Correct’, Print altijd ‘Incorrect’, Print ‘Correct’ voor correcte wachtwoorden en ‘Incorrect’ voor onjuiste wachtwoorden, Print ‘Incorrect’ voor correcte wachtwoorden en ‘Correct’ voor onjuiste wachtwoorden :)

<div class="extended-explanation">Het programma print altijd ‘Correct’ omdat <code>$password = '*&(#&$#Y'</code> een toewijzing is die de nieuwe waarde van de <code>$password</code> variabele instelt. Aangezien de waarde noch nul noch een lege string is, wordt deze als <code>True</code> beschouwd. Het wachtwoord dat de gebruiker invoert, wordt in dit geval nooit gecontroleerd.<br/><br/>Als je <code>==</code> typt, zal het programma breken omdat het probeert de strings (het gebruikerswachtwoord en het correcte wachtwoord) naar nummers te converteren en faalt.</div>

{% include quiz.html %}

{% include nav.html %}