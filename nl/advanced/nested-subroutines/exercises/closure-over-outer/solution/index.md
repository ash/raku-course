---
title: 'Solution: Afsluiten over de buitenste'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
sub greet($name) {
    sub message {
        "Hello, $name!";
    }

    say message;
}

greet('Anna');
```

🦋 Je kunt de broncode vinden in het bestand [closure-over-outer.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/closure-over-outer.raku).

## Uitvoer

```
Hello, Anna!
```

## Opmerkingen

1. `message` neemt geen argumenten aan, maar kan toch `$name` gebruiken. Een geneste subroutine sluit over de lexicale variabelen van de subroutine die haar bevat, dus de buitenste `$name` is binnen bereik.

1. Wanneer `greet('Anna')` wordt uitgevoerd, is `$name` gelijk aan `'Anna'`, dus `message` retourneert `Hello, Anna!`. Dit delen van het omsluitende bereik is wat geneste hulpfuncties meer maakt dan alleen verborgen functies.

{% include nav.html %}
