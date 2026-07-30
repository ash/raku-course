---
title: 'Oplossing: Rits twee lijsten tot een hash'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @names  = <Anna Bob Cara>;
my @scores = 90, 85, 95;

my %result = @names Z=> @scores;

for %result.sort -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Je kunt de broncode vinden in het bestand [zip-to-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/zip-to-hash.raku).

## Uitvoer

```
Anna: 90
Bob: 85
Cara: 95
```

## Opmerkingen

1. `Z=>` is de zip-meta-operator toegepast op de paarconstructor `=>`: hij loopt beide
lijsten in de pas af en bouwt uit elke positie een paar `naam => score`.

1. Die lijst paren aan een `%`-variabele toekennen maakt een hash, die daarna
in sleutelvolgorde afgedrukt wordt.

{% include nav.html %}
