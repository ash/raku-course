---
title: 'Oplossing: Lengtecodering'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $text = 'aaabbbbcc';

my $encoded = '';
for $text ~~ m:g/ (.) $0* / -> $match {
    $encoded ~= $match[0] ~ $match.chars;
}

say $encoded;
```

🦋 Je kunt de broncode vinden in het bestand [run-length.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/run-length.raku).

## Uitvoer

```
a3b4c2
```

## Opmerkingen

1. Het patroon `(.) $0*` captureert één teken en matcht daarna zoveel verdere
kopieën ervan als erop volgen — één hele reeks per match. `m:g` verzamelt elke reeks.

1. Voor elke reeks is `$match[0]` de herhaalde letter en `$match.chars` hoe lang
de reeks is, dus samen geven de twee items als `a3`.

1. De match met `-> $match` een naam geven is optioneel. Zonder dat wordt elke match
het onderwerp `$_`, en kun je de variabele weglaten en de methoden er rechtstreeks op aanroepen:

    ```raku
    my $text = 'aaabbbbcc';
    my $encoded = '';

    for $text ~~ m:g/ (.) $0* / {
        $encoded ~= .[0] ~ .chars;
    }

    say $encoded;
    ```

{% include nav.html %}
