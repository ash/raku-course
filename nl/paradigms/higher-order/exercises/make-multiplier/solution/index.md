---
title: 'Oplossing: Maak een vermenigvuldiger'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub multiplier($n) {
    sub ($x) { $x * $n };
}

my &double = multiplier(2);
my &triple = multiplier(3);

say double(7);
say triple(7);
```

🦋 Je kunt de broncode vinden in het bestand [make-multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/make-multiplier.raku).

## Uitvoer

```
14
21
```

## Opmerkingen

1. `multiplier(2)` geeft een subroutine terug die onthoudt dat `$n` `2` is; `multiplier(3)` geeft een aparte subroutine terug die `3` onthoudt.

1. Elke teruggegeven subroutine houdt haar eigen `$n`, dus geeft `double(7)` `14` en `triple(7)` `21` — twee onafhankelijke functies gebouwd uit dezelfde fabriek.

{% include nav.html %}
