---
title: 'Quiz — Der Grundfall'
translations_gpt:
---

{% include menu.html %}

Was geschieht, wenn eine rekursive Subroutine keinen erreichbaren Grundfall hat?

{:.quiz}
0 | Sie liefert `Nil`
0 | Sie liefert `0`
1 | Sie hört nie auf, sich selbst aufzurufen, und scheitert schließlich
0 | Der Compiler weigert sich, sie auszuführen

{% include quiz.html %}

<div class="extended-explanation">

Ohne erreichbaren Grundfall macht jeder Aufruf endlos einen weiteren Aufruf. Die Rekursion endet nie, und dem Programm geht schließlich der Aufrufstapel aus, sodass es scheitert. Ein Grundfall ist das, was die Rekursion anhalten lässt.

</div>

{% include nav.html %}
