---
title: 'Oplossing: Een negatieve fout'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Negative is Exception {
    has $.n;

    method message {
        "$.n is negative";
    }
}

sub check($n) {
    Negative.new(n => $n).throw if $n < 0;
    return $n;
}

{
    say check(-5);

    CATCH {
        when Negative {
            say .message;
        }
    }
}

Negative.new(n => -10).throw;
```

🦋 Je kunt de broncode vinden in het bestand [negative-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/negative-error.raku).

## Uitvoer

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Opmerkingen

1. `Negative is Exception` maakt de klasse werpbaar, en haar methode `message` gebruikt het attribuut `n` om de tekst op te bouwen.

1. `check` valideert haar invoer en werpt de eigen exceptie voor een negatief getal. De exceptie reist uit `check` naar de `CATCH` in het aanroepende blok, waar `when Negative` haar op type matcht en de melding afdrukt. Invoer valideren en slechte waarden met een getypeerde exceptie signaleren is een heel gebruikelijke, echte toepassing van eigen excepties.

1. De `{ … }` om de aanroep staan er omdat een `CATCH`-faser de excepties afhandelt die in **zijn eigen omvattende blok** geworpen worden. Het blok groepeert de riskante `check(-5)` met de `CATCH` die haar bewaakt, zodat de geworpen exceptie hier ter plekke gevangen wordt en de uitvoering vlak na het blok hervat. Zonder ze in een blok te wikkelen zou de `CATCH` in plaats daarvan het hele programma bewaken — en zodra hij de exceptie ving zou het programma eenvoudigweg eindigen, zonder natuurlijke plek om verder te gaan.

1. De laatste `Negative.new(n => -10).throw` toont de andere kant hiervan. Hij staat **buiten** het blok, dus niets vangt hem: de exceptie plant zich helemaal naar boven voort, en het programma sterft, waarbij het de melding en een backtrace naar de standaardfoutuitvoer schrijft en met een status ongelijk aan nul afsluit. Dat is het standaardlot van elke exceptie die je niet vangt — en precies waarom de eerste worp een `CATCH` nodig had om te overleven.

{% include nav.html %}
