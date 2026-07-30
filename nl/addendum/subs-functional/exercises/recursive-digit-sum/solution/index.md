---
title: 'Oplossing: Cijfersom door recursie'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub digit-sum($n) {
    return $n if $n < 10;
    return $n % 10 + digit-sum($n div 10);
}

say digit-sum(12345);
```

🦋 Je kunt de broncode vinden in het bestand [recursive-digit-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/recursive-digit-sum.raku).

## Uitvoer

```
15
```

## Opmerkingen

1. Het basisgeval is een getal van één cijfer, dat zijn eigen cijfersom is. Anders
pelt de routine het laatste cijfer af met `$n % 10` en roept ze zichzelf op de rest aan,
`$n div 10`.

{% include nav.html %}
