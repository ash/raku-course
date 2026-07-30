---
title: 'Oplossing: Digitale wortel'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $n = 987654;

while $n >= 10 {
    $n = [+] $n.comb;
}

say $n;
```

🦋 Je kunt de broncode vinden in het bestand [digital-root.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/digital-root.raku).

## Uitvoer

```
3
```

## Opmerkingen

1. `$n.comb` splitst het getal in zijn afzonderlijke cijfertekens; `[+]` telt
ze op en maakt van de strings automatisch getallen.

1. De lus herhaalt zolang het resultaat nog meer dan één cijfer heeft, dus stopt hij zodra
`$n` onder `10` zakt.

{% include nav.html %}
