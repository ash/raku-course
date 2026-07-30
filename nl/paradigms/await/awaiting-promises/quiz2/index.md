---
title: 'Quiz — await en sleep'
translations_gpt:
---

{% include menu.html %}

Wat doet het volgende programma?

```raku
my $p = start { sleep 2; 42 };
say 'waiting';
say await $p;
```

{:.quiz}
1 | Drukt meteen `waiting` af en ongeveer twee seconden later `42`
0 | Pauzeert twee seconden en drukt daarna `waiting` en `42` samen af
0 | Drukt `waiting` en `42` meteen af — de sleep gebeurt op de achtergrond
0 | Drukt `waiting` af en daarna `Promise` — een slapende promise kun je niet afwachten

{% include quiz.html %}

<div class="extended-explanation">

`start` geeft **meteen** een promise terug — het blok, met zijn `sleep`, draait op een achtergrondthread. Dus `say 'waiting'` wordt onmiddellijk uitgevoerd. Het is `await` dat blokkeert: het programma pauzeert daar tot het achtergrondblok zijn dutje van twee seconden voltooid heeft en `42` oplevert, dat daarna afgedrukt wordt. De pauze hoort bij de regel met `await`, niet bij de regel met `start`.

</div>

{% include nav.html %}
