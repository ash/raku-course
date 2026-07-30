---
title: 'Solution: Verdrievoudigen'
translations_gpt: De oplossing van 'Verdrievoudig het'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $factor = 3;
my $scale = -> $x { $x * $factor };

say $scale(7);
```

🦋 Je kunt de broncode vinden in het bestand [triple-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/triple-it.raku).

## Uitvoer

```
21
```

## Opmerkingen

1. Het pointy block gebruikt `$factor`, een variabele uit het omliggende bereik, hoewel het slechts een parameter `$x` heeft. Het vastleggen van zulke variabelen is wat het tot een closure maakt.

1. Met `$factor` gelijk aan `3` geeft het aanroepen van `$scale(7)` het resultaat `21`. Verander `$factor` en hetzelfde blok zou met de nieuwe waarde schalen:

```raku
$factor = 5;
say $scale(7); # 35
```

Omdat de closure de *variabele* vastlegt in plaats van de waarde op het moment dat hij geschreven werd, ziet de latere aanroep de bijgewerkte `$factor` en geeft `35` terug.

{% include nav.html %}
