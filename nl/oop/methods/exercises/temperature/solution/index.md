---
title: 'Oplossing: Temperatuur omrekenen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Celsius {
    has $.degrees;

    method to-fahrenheit {
        $.degrees * 9 / 5 + 32;
    }
}

say Celsius.new(degrees => 100).to-fahrenheit;
```

🦋 Je kunt de broncode vinden in het bestand [temperature.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/temperature.raku).

## Uitvoer

```
212
```

## Opmerkingen

1. De methode werkt met het eigen attribuut `degrees` van het object, dus de formule heeft geen meegegeven argument nodig.

1. Voor `100` graden Celsius is het resultaat `212` graden Fahrenheit.

{% include nav.html %}
