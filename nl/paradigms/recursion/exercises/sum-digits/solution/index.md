---
title: 'Oplossing: Som van de cijfers'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub sum-digits($n) {
    $n < 10 ?? $n !! $n % 10 + sum-digits($n div 10);
}

say sum-digits(1234);
```

🦋 Je kunt de broncode vinden in het bestand [sum-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/sum-digits.raku).

## Uitvoer

```
10
```

## Opmerkingen

1. Het basisgeval is een getal van één cijfer, dat zijn eigen cijfersom is.

1. Anders is `$n % 10` het laatste cijfer en laat `$n div 10` het vallen; `1 + 2 + 3 + 4` is `10`.

{% include nav.html %}
