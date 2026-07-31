---
title: 'Risinājums: Sadaliet divos masīvos'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @small;
my @big;

react {
    whenever Supply.from-list(4, 42, 7, 100, 15) {
        if $_ > 10 { @big.push($_) }
        else       { @small.push($_) }
    }
}

say @small;
say @big;
```

🦋 Atrodiet programmu failā [react-collect.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-collect.raku).

## Izvade

```
[4 7]
[42 100 15]
```

## Komentāri

1. `whenever` ķermenis ir parasts kods, tāpēc tas var darīt vairāk nekā tikai savākt — šeit tas **izlemj**, novirzot katru vērtību uz `@big` vai `@small`, kad tā pienāk. Katrā masīvā vērtības saglabā savu straumes secību.

1. `react` bloks nogaida, līdz straume ir pabeigta, tāpēc abi masīvi ir pilnīgi, pirms tos izdrukā.

{% include nav.html %}
