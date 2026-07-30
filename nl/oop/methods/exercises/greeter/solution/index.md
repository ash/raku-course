---
title: 'Oplossing: Een omgekeerd woord'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Word {
    has $.text;

    method reversed {
        $.text.flip;
    }
}

say Word.new(text => 'Raku').reversed;
```

🦋 Je kunt de broncode vinden in het bestand [greeter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/greeter.raku).

## Uitvoer

```
ukaR
```

## Opmerkingen

1. De methode `reversed` bereikt de eigen `text` van het object via zijn accessor `$.text` en roept daar de ingebouwde `flip` op aan, die de string omgekeerd teruggeeft.

1. De methode wordt rechtstreeks aangeroepen op het net gemaakte `Word`-object. Er wordt niets teruggeschreven — `reversed` berekent eenvoudigweg een nieuwe waarde uit het attribuut en geeft die terug.

1. Merk op dat je binnen de klasse de variabele rechtstreeks kunt lezen zonder de accessor te gebruiken:

```raku
    method reversed {
        $!text.flip;
    }
```

{% include nav.html %}
