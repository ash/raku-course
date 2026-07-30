---
title: gather und take
translations_gpt:
---

{% include menu.html %}

Ein `gather`-Block sammelt Werte. Überall darin — auch in Schleifen und in Subroutinen, die es aufruft — fügt ein `take` einen Wert zu der Liste hinzu, die `gather` erzeugt:

```raku
my @squares = gather {
    take $_ ** 2 for 1..3;
}

say @squares; # [1 4 9]
```

Das `take` läuft einmal für jede Zahl `1, 2, 3` und steuert `1`, `4` und `9` bei. Der ganze `gather`-Block ergibt die Liste alles Genommenen.

`take` darf unter jeder Ablaufsteuerung stehen, was `gather` ideal macht, um eine Liste mit Bedingungen zu bauen:

```raku
my @evens = gather {
    for 1..10 {
        take $_ if $_ %% 2;
    }
}

say @evens; # [2 4 6 8 10]
```

Hier wird ein Wert nur genommen, wenn das `if` gelingt, in der Liste landen also nur die geraden Zahlen. Das ist oft klarer, als die Liste von Hand mit `push` aufzubauen, denn die Logik liest sich wie eine gewöhnliche Schleife, und `take` markiert schlicht die zu behaltenden Werte.

{% include nav.html %}
