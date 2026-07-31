---
title: 'Solvo: Listo disigita per komoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @words = 'Raku', 'is', 'fun';

say @words.reduce(-> $a, $b { "$a, $b" });
```

🦋 Vi povas trovi la fontkodon en la dosiero [comma-separated.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/comma-separated.raku).

## Eligo

```
Raku, is, fun
```

## Komentoj

1. Ĉi tie la bloko **konstruas** valoron anstataŭ elekti unu: `$a` estas la ĝis nun kunmetita ĉeno kaj `$b` estas la sekva vorto, kaj `"$a, $b"` gluas ilin per komo kaj spaco.

1. La unua voko kunigas `'Raku'` kaj `'is'` en `Raku, is`; la dua kunigas tion kun `'fun'` por doni `Raku, is, fun`. Jen la speco de apartigil-konscia kunigo, kiun la metaoperatoro `[~]` ne povas esprimi memstare.

1. En vera kodo vi atingus la enkonstruitan metodon `join`, kiu faras ĝuste tion — `say @words.join(', ');` presas la saman `Raku, is, fun`. La celo de la ekzerco estas ekzerci esprimi la saman ideon kiel blokon `reduce`.

{% include nav.html %}
