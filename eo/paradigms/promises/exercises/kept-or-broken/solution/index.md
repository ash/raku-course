---
title: 'Solvo: Plenumita aŭ rompita'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $p = start { 10 };
await $p;
say $p.status;
```

🦋 Vi povas trovi la fontkodon en la dosiero [kept-or-broken.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/kept-or-broken.raku).

## Eligo

```
Kept
```

## Komentoj

1. Post kiam la bloko finiĝas sukcese, la promeso estas _plenumita_.

1. `.status` raportas tion kiel `Kept`. Se la bloko estus ĵetinta escepton, la stato estus `Broken` anstataŭe.

{% include nav.html %}
