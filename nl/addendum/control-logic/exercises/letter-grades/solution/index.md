---
title: 'Oplossing: Lettercijfers'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
for 95, 82, 71, 58 -> $score {
    my $grade = do given $score {
        when * >= 90 { 'A' }
        when * >= 80 { 'B' }
        when * >= 70 { 'C' }
        when * >= 60 { 'D' }
        default      { 'F' }
    }

    say "$score -> $grade";
}
```

🦋 Je kunt de broncode vinden in het bestand [letter-grades.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/letter-grades.raku).

## Uitvoer

```
95 -> A
82 -> B
71 -> C
58 -> F
```

## Opmerkingen

1. `do given` maakt van het hele `given`/`when` een uitdrukking waarvan de waarde het
matchende blok is — hier een cijferletter — die in `$grade` bewaard wordt.

1. Elke `when * >= N` is een Whatever-vergelijking met het onderwerp. De eerste die
slaagt wint, dus hebben de grenzen elk alleen een ondergrens nodig.

{% include nav.html %}
