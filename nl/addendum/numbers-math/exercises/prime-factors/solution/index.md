---
title: 'Oplossing: Ontbinden in priemfactoren'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $n = 360;
my @factors;

for 2..$n -> $d {
    while $n %% $d {
        @factors.push($d);
        $n div= $d;
    }
}

say @factors;
```

🦋 Je kunt de broncode vinden in het bestand [prime-factors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/prime-factors.raku).

## Uitvoer

```
[2 2 2 3 3 5]
```

## Opmerkingen

1. Voor elke kandidaat-deler `$d` deelt de binnenste `while` hem zo vaak uit `$n` als
hij erin past en duwt hij `$d` er telkens bij. Omdat de kleinere factoren eerst
verwijderd worden, is elke `$d` die `$n` nog deelt gegarandeerd priem.

1. `$n div= $d` is gehele deling terug in `$n`; het laat het getal krimpen tot er
niets dan `1` overblijft.

{% include nav.html %}
