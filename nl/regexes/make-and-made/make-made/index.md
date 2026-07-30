---
title: make en made
translations_gpt:
---

{% include menu.html %}

In plaats van de waarden er achteraf uit de boom op te diepen, kun je **tijdens** het ontleden een waarde aan een match hangen. Binnen de body van een token kun je een _codeblok_ inbedden — een innerlijk `{ … }` tussen het patroon geschreven — dat draait zodra het matchen daar aankomt. Binnen dat blok bewaart de functie `make` een waarde op de huidige match:

```raku
grammar OneNum {
    token TOP    { <number> { make $<number>.Int } }
    token number { \d+ }
}
```

Wanneer `TOP` matcht, draait het innerlijke blok `{ make $<number>.Int }` — de buitenste accolades zijn slechts de body van het token — en bewaart het het gehele getal op de match. Je leest het naderhand terug met `made` (of zijn alias `.ast`):

```raku
say OneNum.parse('42').made; # 42
```

Omdat we `$<number>.Int` bewaarden, is de waarde die `made` teruggeeft een echte `Int` — het getal zelf, niet het matchobject:

```raku
say OneNum.parse('42').made + 1; # 43
```

Merk op dat deze `+ 1` ook zonder de `.Int` `43` zou geven, omdat een match in rekenkunde tot zijn cijfers versimpelt. De reden om `.Int` aan te roepen is dat de *bewaarde* waarde werkelijk een getal **is** — en dat wil je zodra ze in een gegevensstructuur bewaard of doorgegeven wordt in plaats van de kale match.

De bewaarde waarde kan van alles zijn — een getal, een string, een array, een object. Een token kan ook de waarden combineren die zijn subtokens gemaakt hebben. Bijvoorbeeld twee gecapturde getallen optellen:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Sum.parse('2+3').made; # 5
```

`make` en `made` vormen de brug van "het matchte" naar "hier is de betekenis". De blokken inline zetten werkt, maar het mengt het patroon met de logica; de volgende sectie verplaatst die logica naar een aparte [_actieklasse_](/nl/regexes/action-classes).

{% include nav.html %}
