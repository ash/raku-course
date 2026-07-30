---
title: Inline acties versus actieklassen
translations_gpt:
---

{% include menu.html %}

Je hebt nu twee manieren om betekenis aan een parse te hangen. Welke moet je gebruiken?

**Inline acties** zetten een blok `{ make … }` regelrecht binnen het token:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}
```

Ze zijn snel geschreven en prima voor een piepkleine grammatica of een eenmalig script. De prijs is dat het patroon en de logica in elkaar verstrengeld raken.

**Een actieklasse** houdt de twee uit elkaar — de grammatica beschrijft de vorm, de actieklasse beschrijft de betekenis:

```raku
grammar Sum {
    token TOP { <a> '+' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class SumActions {
    method TOP($/) { make $<a>.made + $<b>.made }
    method a($/)   { make $/.Int }
    method b($/)   { make $/.Int }
}
```

Deze scheiding heeft echte voordelen naarmate een grammatica groeit: het patroon blijft leesbaar, en je kunt **één grammatica met meerdere actieklassen** combineren — een die evalueert, een die netjes afdrukt, een die een gegevensstructuur bouwt — zonder de grammatica aan te raken.

De vuistregel: inline acties voor iets kleins en wegwerpbaars, een actieklasse voor alles wat je gaat onderhouden of hergebruiken.

{% include nav.html %}
