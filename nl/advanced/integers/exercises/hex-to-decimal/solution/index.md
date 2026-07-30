---
title: 'Solution: Hex naar decimaal'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $n = :16<1A>;

say $n;
say $n.base(16);
```

🦋 Je kunt de broncode vinden in het bestand [hex-to-decimal.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/hex-to-decimal.raku).

## Uitvoer

```
26
1A
```

## Opmerkingen

1. De radix-vorm `:16<1A>` leest `1A` als een grondtal-16 getal, wat gelijk is aan `1 × 16 + 10 = 26`. De variabele `$n` bevat nu het gewone gehele getal.

1. `$n.base(16)` zet dat gehele getal terug om naar een grondtal-16 string, wat weer `1A` oplevert — wat bevestigt dat het lezen in een talstelsel en het afdrukken in een talstelsel inverse bewerkingen zijn.

{% include nav.html %}
