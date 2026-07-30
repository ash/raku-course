---
title: 'Oplossing: Macht'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub power($base, $exp) {
    $exp == 0 ?? 1 !! $base * power($base, $exp - 1);
}

say power(2, 10);
```

🦋 Je kunt de broncode vinden in het bestand [power.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/power.raku).

## Uitvoer

```
1024
```

## Opmerkingen

1. Het basisgeval geeft `1` terug wanneer de exponent `0` bereikt, aangezien elke basis tot de macht nul één is.

1. De recursieve stap vermenigvuldigt `$base` met `power($base, $exp - 1)` en pelt er telkens één factor af. Dus `power(2, 10)` vermenigvuldigt tien `2`'en met elkaar, wat `1024` geeft.

{% include nav.html %}
