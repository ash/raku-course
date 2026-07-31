---
title: 'Solvo: Silentigi averton'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $name;

my $greeting = quietly { "Hello, " ~ $name ~ "!" };
say $greeting;
```

🦋 Vi povas trovi la fontkodon en la dosiero [silence-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/silence-warning.raku).

## Eligo

```
Hello, !
```

## Komentoj

1. Interpoli la nedefinitan `$name` en la ĉenon normale kaŭzas averton pri "uzo de neinicialigita valoro". Envolvi la esprimon en `quietly` kaŝas ĝin, do nur la salutfrazo estas presata.

1. Same kiel `do`, `quietly` redonas la valoron de sia bloko, do la kunmetita ĉeno (kun la mankanta nomo lasanta malplenan interspacon) estas konservita en `$greeting`.

1. `quietly` nur kaŝas la averton — la valoro ankoraŭ estas nedefinita. Se vi anstataŭe volas *trakti* la mankantan valoron, provizu defaŭlton per la difinita-aŭ operatoro `//`: `$name // 'friend'` donas `'friend'` kiam `$name` estas nedefinita, do `"Hello, " ~ ($name // 'friend') ~ "!"` presas `Hello, friend!` tute sen averto.

{% include nav.html %}
