---
title: Blokgerelateerde phasers
translations_gpt: Block-gerelateerde phasers
---

{% include menu.html %}

Naast de programma-brede phasers heeft Raku phasers die gekoppeld zijn aan de levensduur van een enkel blok of een lus.

## Een blok betreden en verlaten

De `ENTER`-phaser wordt uitgevoerd telkens wanneer de uitvoering een blok betreedt, en de `LEAVE`-phaser wordt uitgevoerd telkens wanneer het blok verlaten wordt — ongeacht op welke regel ze geschreven staan:

```raku
say 'before block';
{
    LEAVE say 'leaving';
    ENTER say 'entering';
    say 'inside';
}
say 'after block';
```

De uitvoer laat zien dat `ENTER` als eerste wordt uitgevoerd en `LEAVE` als laatste, rondom de body van het blok:

```
before block
entering
inside
leaving
after block
```

`LEAVE` is bijzonder nuttig omdat het ook wordt uitgevoerd als het blok vroegtijdig verlaten wordt, wat het een betrouwbare plek maakt om een resource vrij te geven.

Een phaser kan een volledig `{ }`-blok bevatten in plaats van een enkele instructie, en je kunt er meerdere instellen. Wanneer een blok meer dan een `LEAVE` heeft, worden ze in omgekeerde volgorde uitgevoerd — de laatst geregistreerde wordt als eerste uitgevoerd, zodat het blok als een stapel wordt afgewikkeld:

```raku
say 'open A';
{
    LEAVE {
        say 'close A';
    }
    say 'open B';
    LEAVE {
        say 'close B';
    }
    say 'work';
}
say 'done';
```

Resource `A` wordt als eerste geopend en als laatste gesloten:

```
open A
open B
work
close B
close A
done
```

Deze last-in, first-out volgorde is precies wat je wilt voor opruimwerk: wat het meest recent is ingesteld, wordt als eerste afgebroken. De programma-brede `END`-phaser gedraagt zich op dezelfde manier — meerdere `END`-blokken worden ook in omgekeerde volgorde uitgevoerd ten opzichte van de volgorde waarin ze geschreven zijn.

## Lus-phasers

Binnen lussen markeren drie extra phasers de fasen van de iteratie: `FIRST` wordt eenmalig uitgevoerd voor de eerste iteratie, `LAST` wordt eenmalig uitgevoerd na de laatste, en `NEXT` wordt aan het einde van elke iteratie uitgevoerd:

```raku
for 1..3 {
    FIRST say '-- first';
    LAST  say '-- last';
    NEXT  say "-- next (was $_)";
    say "body $_";
}
```

De lus produceert:

```
-- first
body 1
-- next (was 1)
body 2
-- next (was 2)
body 3
-- next (was 3)
-- last
```

Net als bij de andere phasers maakt de positie van `FIRST`, `NEXT` en `LAST` in de broncode niet uit — elk wordt op het eigen moment uitgevoerd.

{% include nav.html %}
