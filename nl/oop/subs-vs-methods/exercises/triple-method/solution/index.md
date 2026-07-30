---
title: 'Oplossing: Verdrievoudigen als methode'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Number {
    has $.n;

    method triple {
        $.n * 3;
    }
}

say Number.new(n => 7).triple;
```

🦋 Je kunt de broncode vinden in het bestand [triple-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-method.raku).

## Uitvoer

```
21
```

## Opmerkingen

1. Als methode hoort `triple` bij het object en werkt hij met de eigen `n` van het object — er wordt niets meegegeven.

1. Vergeleken met de versie als subroutine leeft de gegevenswaarde in het object in plaats van als argument binnen te komen. Beide geven `21`.

{% include nav.html %}
