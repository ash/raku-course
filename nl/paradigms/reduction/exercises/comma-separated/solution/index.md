---
title: 'Oplossing: Lijst met komma’s'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @words = 'Raku', 'is', 'fun';

say @words.reduce(-> $a, $b { "$a, $b" });
```

🦋 Je kunt de broncode vinden in het bestand [comma-separated.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/comma-separated.raku).

## Uitvoer

```
Raku, is, fun
```

## Opmerkingen

1. Hier **bouwt** het blok een waarde in plaats van er een te kiezen: `$a` is de tot dan toe samengestelde string en `$b` is het volgende woord, en `"$a, $b"` plakt ze met een komma en een spatie aaneen.

1. De eerste aanroep voegt `'Raku'` en `'is'` samen tot `Raku, is`; de tweede voegt dat samen met `'fun'` tot `Raku, is, fun`. Dit is precies het soort samenvoegen met scheidingsteken dat de meta-operator `[~]` op zichzelf niet kan uitdrukken.

1. In echte code zou je naar de ingebouwde methode `join` grijpen, die precies dit doet — `say @words.join(', ');` drukt dezelfde `Raku, is, fun` af. De oefening is bedoeld om te oefenen met hetzelfde idee als `reduce`-blok uitdrukken.

{% include nav.html %}
