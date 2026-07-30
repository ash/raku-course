---
title: 'Quiz — HTTP-Anfragen'
translations_gpt:
---

{% include menu.html %}

Was kennzeichnet in einer über einen Socket gesendeten HTTP-Anfrage das Ende der Anfrage-Header?

{:.quiz}
0 | Ein Punkt
1 | Eine leere Zeile (ein zusätzliches `\r\n`)
0 | Das Wort `END`
0 | Das Schließen des Sockets

{% include quiz.html %}

<div class="extended-explanation">

HTTP trennt die Header vom Rumpf — und meldet „keine Header mehr“ — mit einer leeren Zeile, geschrieben als zusätzliches `\r\n`. Ohne sie wartet der Server weiter auf den Rest der Anfrage.

</div>

{% include nav.html %}
