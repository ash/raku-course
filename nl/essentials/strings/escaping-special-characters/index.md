---
title: Speciale tekens ontsnappen in Raku-strings
---

{% include menu.html %}

Stel je voor dat je een prijslabel wilt afdrukken en je bewaart zowel de naam van het product als de prijs in scalair variabelen?

```raku
my $product = 'Electriciteit';
my $price = 3.14;
```

Hoe druk je het label af als de prijs in dollars moet zijn? De verwachte output is: `Electriciteit kost $3.14`. Een dollarteken in dubbel aanhalingstekens is een indicator van een te interpoleren variabele. Om het `$`-teken zelf af te drukken, moet je het ontsnappen:

```raku
say "$product kost \$$price";
```

Natuurlijk kun je stringconcatenatie gebruiken en het ontsnappen van `$` vermijden:

```raku
say $product ~ ' kost $' ~ $price;
```

Deze variant drukt exact dezelfde string af, maar interpolatie ziet er natuurlijker uit en is gemakkelijker te lezen. Merk op dat het `$`-teken noch geïnterpoleerd noch ontsnapt was in een enkel aanhalingsteken string: `' kost $'`. Dat is het belangrijkste verschil. Speciale tekens in enkele aanhalingstekens verschijnen zoals ze zijn.

Hier zijn nog een paar speciale tekens die een speciale betekenis hebben in dubbel aanhalingstekens strings:

`\$` | Dollarteken
`\n` | Nieuwe regel
`\r` | Wagenretour
`\t` | Horizontale tab
`\"` | Dubbel aanhalingsteken
`\\` | Backslash

De manier waarop je de string aanhaalt, bepaalt hoe Raku speciale tekens behandelt. Overweeg deze twee voorbeelden:

```raku
say 'Een\nTwee';
say "Drie\nVier";
```

Als je dit programma uitvoert, zul je zien dat de eerste string zoals hij is op één regel verschijnt. De tweede string werd in twee stukken gesplitst:

    Een\nTwee
    Drie
    Vier

In dubbele aanhalingstekens werd een speciale sequentie `\n` verwerkt als een nieuwe regel teken, terwijl in een string in enkele aanhalingstekens het een reguliere sequentie van twee tekens was: `\` en `n`.

Er is een interessante uitzondering voor `'` en `\`. In enkele aanhalingstekens kun je een enkel aanhalingsteken ontsnappen door het te prefixen met een andere `\`:

```raku
say '\''; # '
```

Een backslash moet ook worden ontsnapt als er een enkel aanhalingsteken op volgt:

```raku
say 'a\b\c\\'; # a\b\c\
```

{% include nav.html %}