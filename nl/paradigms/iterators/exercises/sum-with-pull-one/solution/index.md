---
title: 'Oplossing: Optellen met pull-one'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $it = (3, 7, 5).iterator;
my $sum = 0;

loop {
    my $v := $it.pull-one;
    last if $v =:= IterationEnd;
    $sum += $v;
}

say $sum;
```

🦋 Je kunt de broncode vinden in het bestand [sum-with-pull-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/iterators/sum-with-pull-one.raku).

## Uitvoer

```
15
```

## Opmerkingen

1. `.iterator` geeft de op ophalen gebaseerde kijk op de lijst, en elke `pull-one` geeft het volgende getal terug.

1. De waarde wordt met `:=` **gebonden**, niet toegekend, zodat `$v =:= IterationEnd` het einde correct kan opmerken — een toekenning met `=` zou de container vergelijken in plaats van de waarde. De lus telt `3`, `7` en `5` op, komt daarna `IterationEnd` tegen en stopt, met `15` als resultaat.

{% include nav.html %}
