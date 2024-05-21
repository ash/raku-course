---
title: Quiz — Postfix for
---

{% include menu.html %}

Versuchen Sie, das Programm zu vervollständigen, sodass es die Postfix-Form von `for` verwendet und den folgenden Text ausgibt:

    A
    A
    B
    B
    C
    C

Hier ist der Entwurf des Codes:

{:.quiz-code}
. |
{ | ␣ 
. | &nbsp;&nbsp;&nbsp;&nbsp;.say;
. | &nbsp;&nbsp;&nbsp;&nbsp;.say;
} | ␣ for &apos;A&apos;..&apos;C&apos;;

<div class="extended-explanation">Dieser Code ist ein Beispiel für die Verwendung eines Codeblocks mit dem Postfix <code>for</code>. Beachten Sie, dass <code>for</code> in derselben Zeile wie die schließende geschweifte Klammer erscheinen muss. Wenn Sie es in eine neue Zeile setzen, wird der Block von der Schleife getrennt, und Sie erhalten einen Kompilierungsfehler: <code>Missing block</code>. Es ist wahrscheinlich besser, eine solche Praxis der Verwendung eines Codeblocks mit Postfix-Konstrukten zu vermeiden.</div>

{% include quiz.html %}

{% include nav.html %}