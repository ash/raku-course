---
title: String length in Raku
---

{% include menu.html %}

De Unicode-natuur van de strings maakt sommige triviale dingen een beetje moeilijker. Of, tenminste, je moet het beschouwen als een minder rechtlijnig onderwerp. Neem bijvoorbeeld de lengte van een string. Is het het aantal karakters, of is het het aantal bytes? Of wat als hetzelfde karakter anders is ontleed in verschillende strings, is het dan nog steeds één karakter?

## Lengte in karakters

Om de lengte van de string in karakters te krijgen, gebruik je de `chars` _methode_:

```raku
my $str = '你好世界';
say $str.chars;
```

Hoewel we later over methoden zullen praten, moeten we ze nu al kunnen gebruiken. In Raku kun je methoden aanroepen op bijna elk object, inclusief strings en scalair variabelen. Om een methode aan te roepen, gebruik je een punt. Dus hier zien we de methode aangeroepen op een variabele die een string bevat: `$str.chars`.

Er zijn vier karakters in deze Chinese groet 你好世界. En `$str.chars` retourneert precies `4`.

## Lengte in bytes

Ter referentie, dit is hoe je de lengte van de string in bytes krijgt. In dit geval is het belangrijk om te weten welke codering wordt gebruikt om de string te bewaren:

```raku
my $str = '你好世界';
say $str.encode('UTF-8').bytes;
```

Deze keer print het programma `12`. Let op dat we hier twee gekoppelde methode-aanroepen hebben in de tweede regel.

## Lengte in codepunten

Voor de volledigheid, hier is een andere nuttige methode die ook betrekking heeft op stringlengtes: `codes`. Het retourneert het aantal codepunten in de string nadat deze is genormaliseerd. In veel gevallen retourneren `codes` en `chars` hetzelfde. Toch, in enkele zeldzame gevallen, wanneer je bijvoorbeeld 'een onmogelijk' karakter hebt gebouwd, waarvoor er geen enkel codepunt is in de hele Unicode-ruimte, geven de methoden verschillende resultaten.

```raku
say 'x̨'.chars;
say 'x̨'.codes;
```

Dit karakter, `x̨`, heeft geen toegewijd codepunt en kan alleen worden geconstrueerd uit de twee delen: de kleine letter `x` en het combinatieteken `0x0328`. Dus, er is nog steeds één karakter maar twee codepunten. Dus, het programma print:

    1
    2

{% include nav.html %}