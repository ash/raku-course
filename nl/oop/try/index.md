---
title: Excepties vangen met `try`
translations_gpt:
---

{% include menu.html %}

Wanneer er in een Raku-programma iets misgaat — een ontbrekend bestand, een expliciete `die` — wordt er een _exceptie_ geworpen. Een onafgehandelde exceptie legt het programma standaard stil. Met het `try`-blok kun je code draaien die kan mislukken zonder te crashen.

Je wikkelt de riskante code in een `try`-blok. Als er binnen dat blok een exceptie geworpen wordt, stopt het blok daar, maar het programma gaat door:

```raku
my $result = try {
    die 'Boom!';
};

say "Still works";
```

De `die` wordt door de `try` gevangen, dus het programma crasht niet — het gaat regelrecht door naar de volgende opdracht en drukt af:

```
Still works
```

Wanneer het blok zo mislukt, evalueert het naar een ongedefinieerde waarde, dus `$result` is ongedefinieerd:

```raku
say $result.defined; # False
```

De gevangen exceptie wordt in de bijzondere variabele `$!` bewaard. Daar kun je haar melding uit lezen:

```raku
say $!.message; # Boom!
```

`try` maakt van een fatale fout dus iets wat je programma kan bekijken en waarop het kan reageren. Als het blok zonder exceptie draait, bevat `$result` zijn waarde en is `$!` ongedefinieerd.

{% include nav.html %}
