---
title: 'Solvo: Deksesuma al dekuma'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $n = :16<1A>;

say $n;
say $n.base(16);
```

🦋 Vi povas trovi la fontkodon en la dosiero [hex-to-decimal.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/hex-to-decimal.raku).

## Eligo

```
26
1A
```

## Komentoj

1. La radika formo `:16<1A>` legas `1A` kiel baz-16 nombron, kiu egalas al `1 x 16 + 10 = 26`. La variablo `$n` nun enhavas la simplan entjeron.

1. `$n.base(16)` konvertas tiun entjeron reen al baz-16 ĉeno, donante `1A` denove — konfirmante, ke legi bazon kaj presi en bazo estas inversaj operacioj.

{% include nav.html %}
