---
title: 'Solvo: Ligi skalaron'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $source = 1;
my $bound := $source;
my $copy = $source;

$source = 9;
say $bound;
say $copy;
```

🦋 Vi povas trovi la fontkodon en la dosiero [bind-a-scalar.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/bind-a-scalar.raku).

## Eligo

```
9
1
```

## Komentoj

1. Ligado per `:=` faras `$bound` alia nomo por la sama ujo kiel `$source`, anstataŭ kopio. Do ŝanĝi `$source` videblas tra `$bound`, kiu presas `9`.

1. Ordinara atribuo per `=` kopias la valoron en apartan ujon, do `$copy` ne estas influata de la posta ŝanĝo kaj ankoraŭ presas `1`.

1. Vidi la du flank-al-flanke estas la tuta celo: `:=` kunhavigas ujon, `=` duobligas la valoron.

{% include nav.html %}
