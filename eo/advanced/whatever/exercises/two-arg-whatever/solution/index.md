---
title: 'Solvo: Du-argumenta Whatever'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $join = * ~ '-' ~ *;

say $join('a', 'b');
```

🦋 Vi povas trovi la fontkodon en la dosiero [two-arg-whatever.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/two-arg-whatever.raku).

## Eligo

```
a-b
```

## Komentoj

1. La esprimo enhavas du stelojn, do Raku konstruas `WhateverCode` kiu akceptas du argumentojn — la unua stelo estas la unua argumento, la dua stelo estas la dua.

1. Vokante `$join('a', 'b')` plenigas la stelojn laŭ ordo, donante `'a' ~ '-' ~ 'b'`, kio estas `a-b`.

{% include nav.html %}
