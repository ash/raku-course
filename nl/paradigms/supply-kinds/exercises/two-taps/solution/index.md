---
title: 'Oplossing: Twee taps'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $s = Supply.from-list(1, 2, 3);

my @doubled;
my @tripled;
$s.map(* * 2).tap(-> $v { @doubled.push($v) });
$s.map(* * 3).tap(-> $v { @tripled.push($v) });

say @doubled;
say @tripled;
```

🦋 Je kunt de broncode vinden in het bestand [two-taps.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/two-taps.raku).

## Uitvoer

```
[2 4 6]
[3 6 9]
```

## Opmerkingen

1. `Supply.from-list` is on-demand, dus speelt hij zijn volledige reeks voor **elke** tap opnieuw af, onafhankelijk.

1. Zo kunnen de twee taps verschillende pijplijnen over dezelfde bron draaien: de een verdubbelt, de ander verdrievoudigt. Elk ziet heel `1, 2, 3`, dus de resultaten zijn `[2 4 6]` en `[3 6 9]`.

{% include nav.html %}
