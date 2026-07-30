---
title: 'Oplossing: Een terugvalwaarde'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub get($x) {
    fail 'bad' if $x == 0;
    return $x;
}

say get(5) // 'default';
say get(0) // 'default';
```

🦋 Je kunt de broncode vinden in het bestand [fallback-value.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/fallback-value.raku).

## Uitvoer

```
5
default
```

## Opmerkingen

1. `get(5)` geeft gewoon `5` terug, dus `//` houdt die waarde.

1. `get(0)` geeft een ongedefinieerde `Failure` terug, dus valt `//` terug op `'default'`. Omdat een `Failure` ongedefinieerd is, handelt `//` hem stilletjes af, zonder te werpen.

{% include nav.html %}
