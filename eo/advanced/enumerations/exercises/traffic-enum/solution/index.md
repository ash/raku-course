---
title: 'Solvo: Trafiklumo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
enum Light <red amber green>;

my Light $current = red;
say "$current is {$current.value}";

$current = amber;
say "$current is {$current.value}";

$current = green;
say "$current is {$current.value}";
```

🦋 Vi povas trovi la fontkodon en la dosiero [traffic-enum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/traffic-enum.raku).

## Eligo

```
red is 0
amber is 1
green is 2
```

## Komentoj

1. `my Light $current` estas ordinara, ŝanĝebla variablo — nur limigita al la tipo `Light`. Atribui la sekvan konstanton antaŭenigas la lumon, kaj la nombro sekvas la nomon ĉiufoje: `0`, `1`, `2`.

1. `$current++` aspektas kvazaŭ ĝi paŝus al la sekva lumo memstare, sed ĝi malsukcesas kun tipkontrola eraro. `++` traktas la konstanton kiel ĝian nudan nombron kaj redonas `Int` (`red` fariĝas `1`), kaj `Int` ne plu konvenas al la tipo `Light`. Do vi movas la lumon atribuante la sekvan konstanton, kiel supre.

1. La tipa limigo validas por ĉiu atribuo, ne nur por la unua. `$current` akceptos `red`, `amber` aŭ `green`, sed atribui ion, kio ne estas `Light` — nudan nombron aŭ ĉenon — estus tipkontrola eraro.

{% include nav.html %}
