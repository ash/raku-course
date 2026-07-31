---
title: 'Solvo: Kolektu la oblojn de tri'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @threes = gather {
    for 1..15 {
        take $_ if $_ %% 3;
    }
}

say @threes;
```

🦋 Vi povas trovi la fontkodon en la dosiero [gather-multiples-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-multiples-of-three.raku).

## Eligo

```
[3 6 9 12 15]
```

## Komentoj

1. La buklo vizitas ĉiun nombron, sed `take` plenumiĝas nur kiam `$_ %% 3` estas vera.

1. Do nur la obloj de tri estas kolektataj en la liston.

{% include nav.html %}
