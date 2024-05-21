---
title: Quiz — Postfix for
---

{% include menu.html %}

Probeer het programma te voltooien zodat het de postfix-vorm van `for` gebruikt en de volgende tekst afdrukt:

    A
    A
    B
    B
    C
    C

Hier is het concept van de code:

{:.quiz-code}
. |
{ | ␣ 
. | &nbsp;&nbsp;&nbsp;&nbsp;.say;
. | &nbsp;&nbsp;&nbsp;&nbsp;.say;
} | ␣ for &apos;A&apos;..&apos;C&apos;;

<div class="extended-explanation">Deze code is een voorbeeld van het gebruik van een codeblok met de postfix <code>for</code>. Merk op dat <code>for</code> op dezelfde regel moet verschijnen als de sluitende accolade. Als je het op een nieuwe regel zet, wordt het blok gescheiden van de lus en krijg je een compilatiefout: <code>Missing block</code>. Het is waarschijnlijk beter om dergelijke praktijken van het gebruik van een codeblok met postfix-constructies te vermijden.</div>

{% include quiz.html %}

{% include nav.html %}