---
title: Anonieme subroutines
translations_gpt: Anonieme subroutines
---

{% include menu.html %}

Een subroutine hoeft geen naam te hebben. Een _anonieme_ subroutine wordt geschreven net als een gewone, maar zonder naam, en wordt meestal opgeslagen in een variabele zodat je hem later kunt aanroepen.

```raku
my $double = sub ($x) {
    $x * 2
};

say $double(5); # 10
```

De variabele `$double` bevat de subroutine, en `$double(5)` roept hem aan met het argument `5`.

## Pointy blocks

Raku biedt een kortere notatie voor hetzelfde -- het _pointy block_. Het gebruikt de pijl `->` om de parameters te introduceren, en heeft noch het woord `sub` noch haakjes eromheen nodig:

```raku
my $double = -> $x {
    $x * 2
};

say $double(5); # 10
```

Dit is de meest gebruikelijke manier om een kleine anonieme subroutine te schrijven.

## De `&`-sigil

Als je de subroutine liever bij naam aanroept dan via een `$`-variabele, declareer de variabele dan met de `&`-sigil. Dan kun je hem zonder sigil aanroepen, precies zoals een gewone subroutine:

```raku
my &triple = -> $x {
    $x * 3
};

say triple(4); # 12
```

## Doorgeven aan een andere functie

Je hoeft een anonieme subroutine helemaal niet in een variabele op te slaan. Omdat het gewoon een waarde is, kun je het direct doorgeven aan een functie die er een verwacht -- zoals `map`, `grep` of `sort`:

```raku
say (1, 2, 3).map(-> $x { $x * 2 }); # (2 4 6)
```

Het pointy block is hier de anonieme subroutine, en `map` roept het een keer aan voor elk element. Dit is in feite wat je al die tijd al deed: elk `{ ... }`-blok en `-> $x { ... }` dat je aan `map` en `grep` hebt doorgegeven, is een kleine anonieme subroutine, ter plekke geschreven in plaats van eerst een naam te geven.

{% include nav.html %}
