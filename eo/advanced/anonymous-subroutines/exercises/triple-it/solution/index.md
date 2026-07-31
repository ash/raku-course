---
title: 'Solvo: Triobligi ĝin'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $factor = 3;
my $scale = -> $x { $x * $factor };

say $scale(7);
```

🦋 Vi povas trovi la fontkodon en la dosiero [triple-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/triple-it.raku).

## Eligo

```
21
```

## Komentoj

1. La pinta bloko uzas `$factor`, variablon el la ĉirkaŭanta amplekso, kvankam ĝi havas nur parametron `$x`. Kapti tiajn variablojn estas tio, kio faras ĝin fermo.

1. Kun `$factor` egala al `3`, voko de `$scale(7)` donas `21`. Ŝanĝu `$factor` kaj la sama bloko skalus per la nova valoro:

```raku
$factor = 5;
say $scale(7); # 35
```

Ĉar la fermo kaptas la *variablon* anstataŭ ĝian valoron en la momento kiam ĝi estis skribita, la posta voko vidas la ĝisdatigitan `$factor` kaj liveras `35`.

{% include nav.html %}
