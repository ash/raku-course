---
title: 'Solvo: Kolektu la kubojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @cubes = gather {
    take $_ ** 3 for 1..4;
}

say @cubes;
```

🦋 Vi povas trovi la fontkodon en la dosiero [gather-cubes.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-cubes.raku).

## Eligo

```
[1 8 27 64]
```

## Komentoj

1. La `take` plenumiĝas unufoje por ĉiu nombro, kontribuante ĝian kubon (`$_ ** 3`).

1. La bloko `gather` rezultigas la liston de ĉiuj prenitaj valoroj.

{% include nav.html %}
