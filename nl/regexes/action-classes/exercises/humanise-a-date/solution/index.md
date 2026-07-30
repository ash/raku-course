---
title: 'Oplossing: Maak een datum leesbaar'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar Date {
    token TOP   { <year> '-' <month> '-' <day> }
    token year  { \d ** 4 }
    token month { \d ** 2 }
    token day   { \d ** 2 }
}

class Humanise {
    method year($/)  { make $/.Int }
    method month($/) { make <January February March April May June
                             July August September October November December>[$/ - 1] }
    method day($/)   { make $/.Int }
    method TOP($/)   { make "{$<day>.made} {$<month>.made} {$<year>.made}" }
}

say Date.parse('2026-07-05', actions => Humanise.new).made;
```

🦋 Je kunt de broncode vinden in het bestand [humanise-a-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/humanise-a-date.raku).

## Uitvoer

```
5 July 2026
```

## Opmerkingen

1. Anders dan bij een gewone rekenkundige actie maken de tokenmethoden waarden van **verschillende soorten**: `year` en `day` maken gehele getallen, maar `month` maakt een *string* door zijn numerieke waarde als index in een lijst maandnamen te gebruiken. `$/ - 1` maakt van de match met twee cijfers een getal (`07` → `7`) en verschuift naar een index vanaf nul, dus maakt `month` `07` `July`.

1. De methode `TOP` bekijkt de kale tekst nooit opnieuw. Ze leest alleen de drie waarden die de submethoden al gemaakt hebben — `$<day>.made`, `$<month>.made`, `$<year>.made` — en interpoleert ze in de uiteindelijke string. `5` uit `day` teruglezen laat meteen ook de voorloopnul vallen.

1. Dit is het dagelijkse werk van een actieklasse: gestructureerde invoer één keer ontleden en daarna elke methode haar eigen stuk laten omzetten in wat de rest van het programma nodig heeft.

{% include nav.html %}
