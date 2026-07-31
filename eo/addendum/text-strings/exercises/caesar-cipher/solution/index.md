---
title: 'Solvo: Cezara ĉifro'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $text = 'HELLO';

$text ~~ tr/A..Z/D..ZA..C/;

say $text;
```

🦋 Vi povas trovi la fontkodon en la dosiero [caesar-cipher.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/caesar-cipher.raku).

## Eligo

```
KHOOR
```

## Komentoj

1. La transliteruma operatoro `tr///` mapas signojn de la unua aro al la dua,
pozicion post pozicio. `A..Z` viciĝas kontraŭ `D..ZA..C`, do `A` fariĝas
`D`, `B` fariĝas `E`, kaj la vosto `X Y Z` ĉirkaŭvolviĝas reen al `A B C`.

1. `tr///` ŝanĝas la ĉenon surloke, do `$text` mem tenas la ĉifritan vorton
post la kongruo.

{% include nav.html %}
