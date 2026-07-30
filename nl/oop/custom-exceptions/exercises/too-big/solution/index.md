---
title: 'Oplossing: Te groot'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class TooBig is Exception {
    has $.value;
    has $.limit;

    method message {
        "Value $.value exceeds the limit of $.limit";
    }
}

my $limit = 50;

for 30, 99, 60 -> $value {
    TooBig.new(value => $value, limit => $limit).throw if $value > $limit;
    say "Value $value is within the limit";

    CATCH {
        when TooBig {
            say .message;
            say "Try a value up to {.limit}.";
        }
    }
}
```

🦋 Je kunt de broncode vinden in het bestand [too-big.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/too-big.raku).

## Uitvoer

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Opmerkingen

1. `TooBig is Exception` maakt van de klasse een werpbare exceptie. Ze draagt twee stukken gegevens mee, `value` en `limit`, en haar methode `message` verweeft beide in de gemelde tekst.

1. `.throw` werpt de exceptie op, en `when TooBig` matcht haar op type. De afhandelaar doet meer dan de melding afdrukken: hij leest het attribuut `limit` rechtstreeks van het gevangen object om een behulpzame hint te geven. Dat is het voordeel van een eigen exceptie boven een kale string — de afhandelaar krijgt gestructureerde gegevens waarop hij kan reageren.

1. De exceptie wordt **alleen** geworpen wanneer `$value > $limit`. Voor `30` wordt geen exceptie opgeworpen en loopt de body van de lus door tot haar `say`, die afdrukt dat de waarde binnen de limiet ligt. Voor `99` en `60` gaat de `throw` af, dus wordt die `say` overgeslagen en handelt de `CATCH` het in plaats daarvan af. De body van de `for` is zelf het blok dat de `CATCH` bewaakt, dus een gevangen exceptie beëindigt alleen de huidige iteratie — de lus gaat daarna eenvoudigweg door naar de volgende waarde.

{% include nav.html %}
