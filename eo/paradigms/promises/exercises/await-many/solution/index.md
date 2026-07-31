---
title: 'Solvo: Atendu plurajn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @words = <apple pear plum>;
my @jobs = @words.map(-> $w { start { $w.uc } });
say await @jobs;
```

🦋 Vi povas trovi la fontkodon en la dosiero [await-many.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/await-many.raku).

## Eligo

```
(APPLE PEAR PLUM)
```

## Komentoj

1. `@words.map(-> $w { start { $w.uc } })` transformas ĉiun vorton en propran promeson, do ĉiuj tri majuskliĝas samtempe. La pinta bloko nomas la vorton `$w`, do ĉiu promeso kaptas la ĝustan.

1. `await @jobs` atendas la tutan liston kaj redonas la rezultojn en ilia originala ordo, donante `(APPLE PEAR PLUM)`.

{% include nav.html %}
