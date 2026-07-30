---
title: Typen met vaste grootte en overflow
---

{% include menu.html %}

Naast het gewone `int` heeft Raku gehele getallen met een vaste bitbreedte: `int8`, `int16`, `int32`, `int64`, en hun unsigned tegenhangers `uint8`, `uint16`, `uint32`, `uint64`. Het getal geeft aan hoeveel bits de waarde in beslag neemt.

Een vaste breedte betekent een vast bereik. Een `int8` bevat waarden van `-128` tot `127`; een `uint8` bevat `0` tot `255`. Omdat de opslag niet kan groeien, wordt bij het overschrijden van de bovenkant teruggewrapped naar de onderkant -- dit is _overflow_:

```raku
my int8 $i = 127;
$i++;
say $i; # -128
```

Het optellen van een bij de grootste `int8` levert niet `128` op (dat zou niet passen); het wrapt naar de kleinste waarde, `-128`. Unsigned typen wrappen ook:

```raku
my uint8 $u = 255;
$u++;
say $u; # 0
```

Dit is het tegenovergestelde van een normaal `Int`, dat gewoon zo groot groeit als nodig is en nooit overflowt. De afweging is precies het doel van native typen met vaste grootte: je accepteert een vast bereik in ruil voor voorspelbare, compacte en snelle opslag.

Gebruik een native type met vaste grootte wanneer je het bereik van je gegevens kent en de efficientie wilt -- bijvoorbeeld bytes van binaire gegevens in een `uint8`-array. Gebruik voor gewone rekenkundige bewerkingen waarbij getallen onbegrensd kunnen groeien gewoon `Int`.

{% include nav.html %}
