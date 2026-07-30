---
title: 'Oplossing: Verzamel de veelvouden van drie'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @threes = gather {
    for 1..15 {
        take $_ if $_ %% 3;
    }
}

say @threes;
```

🦋 Je kunt de broncode vinden in het bestand [gather-multiples-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-multiples-of-three.raku).

## Uitvoer

```
[3 6 9 12 15]
```

## Opmerkingen

1. De lus gaat elk getal langs, maar `take` draait alleen wanneer `$_ %% 3` waar is.

1. Dus alleen de veelvouden van drie worden in de lijst verzameld.

{% include nav.html %}
