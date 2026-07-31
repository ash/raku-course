---
title: 'Solvo: La denaska defaŭlto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my num $n;
my str $s;

say $n;
say "[$s]";
```

🦋 Vi povas trovi la fontkodon en la dosiero [native-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-default.raku).

## Eligo

```
0
[]
```

## Komentoj

1. Indiĝena `num` ne povas esti nedefinita, do same kiel indiĝena `int` ĝi komenciĝas je `0` anstataŭ je `(Num)`.

1. Indiĝena `str` komenciĝas kiel malplena ĉeno, tial la krampoj aperas kun nenio inter ili. Neniu el la indiĝenaj tipoj iam ajn enhavas nedefinitan valoron.

1. La tipspecifiloj estas esencaj ĉi tie. Forigu ilin — skribu `my $n; my $s;` — kaj la variabloj fariĝos ordinaraj ujoj, kiuj komenciĝas kiel *nedefinitaj* (`Any`). Tiam `say $n` presas `(Any)`, kaj interpoli la nedefinitan `$s` avertas *"Use of uninitialized value … in string context"*. Estas la indiĝenaj tipoj `num` kaj `str`, kiuj garantias la defaŭltajn `0` kaj malplenan ĉenon.

{% include nav.html %}
