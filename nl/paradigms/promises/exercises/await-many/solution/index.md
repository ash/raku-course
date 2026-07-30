---
title: 'Oplossing: Wacht er veel af'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @words = <apple pear plum>;
my @jobs = @words.map(-> $w { start { $w.uc } });
say await @jobs;
```

🦋 Je kunt de broncode vinden in het bestand [await-many.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/await-many.raku).

## Uitvoer

```
(APPLE PEAR PLUM)
```

## Opmerkingen

1. `@words.map(-> $w { start { $w.uc } })` maakt van elk woord een eigen promise, zodat alle drie gelijktijdig in hoofdletters gezet worden. Het pointy block noemt het woord `$w`, zodat elke promise het juiste woord vastlegt.

1. `await @jobs` wacht op de hele lijst en geeft de resultaten in hun oorspronkelijke volgorde terug, wat `(APPLE PEAR PLUM)` geeft.

{% include nav.html %}
