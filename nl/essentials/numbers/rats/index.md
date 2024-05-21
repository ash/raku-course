---
title: Rationale getallen in Raku
---

{% include menu.html %}

Rationale getallen zijn een uniek kenmerk van Raku. Het `Rat` gegevenstype vertegenwoordigt zulke getallen.

Intern vertegenwoordigen rationale getallen breuken met twee gehele delen: teller en noemer. Dus, je kunt gemakkelijk getallen zoals 1/3 presenteren zonder precisie te verliezen.

Er zijn een paar manieren om een `Rat` getal in een programma in Raku op te schrijven:

```raku
my $x = 1/2;
my $y = <2/3>;
```

Merk op dat de schuine streep hier een deel van de notatie is. Het is geen delingsoperator, dus `1/2` betekent niet dat je 1 deelt door 2. Bij het afdrukken worden rationalen echter weergegeven als decimale getallen of gehele getallen:

```raku
say 1/2; # 0.5
say 3/4; # 0.75
```

Het deel van de regel na het `#` symbool is een commentaar en wordt genegeerd door de compiler. Zulke commentaren zullen in de cursus worden gebruikt om de uitvoer van het programma te laten zien.

## Decimale vorm

Het is belangrijk om te beseffen dat wanneer je het getal in decimale vorm schrijft, bijvoorbeeld `0.5`, Raku op dat moment een `Rat` getal creëert. Het is geen geheel getal, maar het is ook geen drijvendekommagetal (`float` of `double` in andere talen). Het is nog steeds een rationaal getal!

Beschouw het volgende voorbeeld:

```raku
say 0.1 + 0.2 - 0.3;
```

Als een programmeertaal drijvendekommarekenkunde gebruikt voor deze berekeningen, zal het resultaat niet gelijk zijn aan 0. De website [0.30000000000000004.com](https://0.30000000000000004.com) geeft een uitgebreide lijst van voorbeelden waar drijvendekommarekenkunde geen verwacht resultaat geeft.

Maar Raku drukt exact `0` af. Dit gebeurt omdat het de getallen `0.1`, `0.2` en `0.3` behandelt als rationale getallen en ze intern bewaart als `1/10`, `2/10` en `3/10`. Voer het uit vanaf de opdrachtregel om het te bevestigen:

```console
$ raku -e 'say 0.1 + 0.2 - 0.3'
0
```

## Unicode vormen

Het is ook mogelijk om Unicode-tekens te gebruiken die de breuken vertegenwoordigen, zoals `½` of `¼` of `¾`. Waarschijnlijk is het niet altijd gemakkelijk om dit met het toetsenbord te typen, maar deze breuken zijn precies dezelfde waarden als hun ASCII-versies gespeld als een breuk of als een decimaal getal:

`½` | `1/2` | `<1/2>` | `0.5`
`¼` | `1/4` | `<1/4>` | `0.25`
`¾` | `3/4` | `<3/4>` | `0.75`

Bij sommige breuken, zoals `1/3`, heb je minder opties, `⅓` of `<1/3>`, omdat de decimale vorm een oneindig aantal cijfers zou vereisen.

{% include nav.html %}