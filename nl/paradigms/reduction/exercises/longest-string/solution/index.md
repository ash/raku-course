---
title: 'Oplossing: De langste string'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @animals = 'cat', 'elephant', 'dog', 'fox';

say @animals.reduce(-> $a, $b { $b.chars > $a.chars ?? $b !! $a });
```

🦋 Je kunt de broncode vinden in het bestand [longest-string.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/longest-string.raku).

## Uitvoer

```
elephant
```

## Opmerkingen

1. Het blok houdt de langste van zijn twee argumenten: `$a` is de langste string die tot nu toe gezien is, `$b` is de volgende, en de ternaire uitdrukking geeft degene met de meeste tekens terug.

1. `reduce` draagt die winnaar bij de volgende aanroep als `$a` mee, dus is na het doorlopen van de hele lijst de opgebouwde waarde de langste string van allemaal — `elephant`.

{% include nav.html %}
