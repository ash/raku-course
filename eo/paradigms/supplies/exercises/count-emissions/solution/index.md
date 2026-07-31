---
title: 'Solvo: Nombru la eligitajn valorojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $count = 0;
Supply.from-list(<a b c d e>).tap(-> $v { $count++ });
say $count;
```

🦋 Vi povas trovi la fontkodon en la dosiero [count-emissions.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/count-emissions.raku).

## Eligo

```
5
```

## Komentoj

1. La konekto plenumiĝas unufoje por ĉiu eligita valoro, kiaj ajn la valoroj estas.

1. Pliigi `$count` ĉiufoje donas la totalan nombron de valoroj, `5`.

{% include nav.html %}
