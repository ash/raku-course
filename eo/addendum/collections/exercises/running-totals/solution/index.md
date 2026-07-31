---
title: 'Solvo: Kreskantaj sumoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @numbers = 2, 4, 6, 8;

my $sum = 0;
my @totals = @numbers.map({ $sum += $_ });

say @totals;
```

🦋 Vi povas trovi la fontkodon en la dosiero [running-totals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/running-totals.raku).

## Eligo

```
[2 6 12 20]
```

## Komentoj

1. La bloko tenas kurantan `$sum` en variablo ekster la map. Ĉiu voko aldonas la
kurantan elementon kaj redonas la novan sumon, do la mapita listo estas la
sinsekvo de partaj sumoj.

1. Raku havas tion enkonstruita. La [triangula redukto](/eo/advanced/metaoperators/reduction)
`[\+]` konservas ĉiun partan sumon, do la tuta solvo estas unu sola esprimo:

    ```raku
    my @numbers = 2, 4, 6, 8;
    say [\+] @numbers; # (2 6 12 20)
    ```

    Ĝi redonas `Seq`, do ĝia resumo uzas rondajn krampojn — `(2 6 12 20)` — prefere ol
    la `[2 6 12 20]` de la tabelo, sed la nombroj estas la samaj.

{% include nav.html %}
