---
title: 'Quiz — Ontvangen voorbij het einde'
translations_gpt:
---

{% include menu.html %}

Van een kanaal zijn alle verstuurde waarden ontvangen. Wat gebeurt er bij de **volgende** `.receive` als het kanaal **nog open** is (nooit gesloten)?

{:.quiz}
0 | Het werpt `X::Channel::ReceiveOnClosed`
1 | Het blokkeert en wacht op een waarde die misschien nooit komt
0 | Het geeft `Nil` terug
0 | Het geeft een lege lijst `()` terug

{% include quiz.html %}

<div class="extended-explanation">

Op een **open** kanaal kan `.receive` niet zien of er nog een waarde onderweg is, dus wacht het — mogelijk eeuwig, als de producent gestopt is zonder te sluiten. De exceptie `X::Channel::ReceiveOnClosed` hoort bij het **gesloten** geval: alleen een gesloten, leeg kanaal faalt snel in plaats van te blokkeren.

</div>

{% include nav.html %}
