---
title: 'Oplossing: Zacht omgekeerde'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub reciprocal($n) {
    fail 'no reciprocal of zero' if $n == 0;
    return 1 / $n;
}

say reciprocal(4);
say reciprocal(0) // 'undefined';
```

🦋 Je kunt de broncode vinden in het bestand [soft-divide.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/soft-divide.raku).

## Uitvoer

```
0.25
undefined
```

## Opmerkingen

1. `reciprocal(4)` geeft gewoon `1 / 4` terug, dat wil zeggen `0.25`.

1. `reciprocal(0)` roept `fail` aan en geeft dus een `Failure` terug, die ongedefinieerd is. De operator `//` geeft zijn rechterkant terug zodra de linkerkant ongedefinieerd is, dus krijgen we de terugval `undefined`.

1. `//` gebruiken telt als de mislukking afhandelen: het test op gedefinieerdheid zonder de waarde te gebruiken, dus blijft de `Failure` zacht en wordt hij nooit als echte exceptie geworpen.

{% include nav.html %}
