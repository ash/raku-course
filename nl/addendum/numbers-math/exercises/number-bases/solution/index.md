---
title: 'Oplossing: Eén getal, drie talstelsels'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $n = 255;

say $n.base(2);
say $n.base(8);
say $n.base(16);
```

🦋 Je kunt de broncode vinden in het bestand [number-bases.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/number-bases.raku).

## Uitvoer

```
11111111
377
FF
```

## Opmerkingen

1. De methode `.base` geeft een geheel getal weer in elk grondtal van 2 tot 36 en geeft een
string terug. `255` is `11111111` binair en `FF` hexadecimaal — de grootste
waarde die in één byte past.

{% include nav.html %}
