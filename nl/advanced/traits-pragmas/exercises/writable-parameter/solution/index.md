---
title: 'Oplossing: Een schrijfbare parameter'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub double($n is rw) {
    $n *= 2;
}

my $score = 21;
double($score);
say $score;
```

🦋 Je kunt de broncode vinden in het bestand [writable-parameter.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/writable-parameter.raku).

## Uitvoer

```
42
```

## Opmerkingen

1. `is rw` bindt de parameter `$n` aan de variabele `$score` van de aanroeper, zodat `$n *= 2` binnen `double` `$score` zelf verandert — en daarom drukt het `42` af.

1. Zonder `is rw` zou de parameter alleen-lezen zijn en zou `$n *= 2` een compilatiefout opleveren. Hem in plaats daarvan als `is copy` markeren zou `double` een eigen kopie geven om te wijzigen, waarbij `$score` op `21` blijft staan.

{% include nav.html %}
