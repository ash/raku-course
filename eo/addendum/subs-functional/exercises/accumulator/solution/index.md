---
title: 'Solvo: Kreskanta akumulilo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub make-accumulator($start) {
    my $total = $start;
    return -> $amount { $total += $amount };
}

my $acc = make-accumulator(100);

say $acc(10);
say $acc(25);
say $acc(-5);
```

🦋 Vi povas trovi la fontkodon en la dosiero [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/accumulator.raku).

## Eligo

```
110
135
130
```

## Komentoj

1. La redonita bloko *fermiĝas ĉirkaŭ* `$total`: tiu variablo plu vivas inter la
vokoj, do ĉiu voko memoras la sumon de la antaŭa.

1. `$total += $amount` kaj ĝisdatigas la kurantan sumon kaj redonas ĝin, kaj tion
ĉiu `say` presas: `110`, poste `135`, poste `130`.

1. Alternativo tenas la sumon ene de la bloko mem, en variablo `state`.
Malsame ol ordinara `my`, variablo `state` estas komencvalorizata nur unufoje — la
unuan fojon, kiam la bloko plenumiĝas — kaj poste konservas sian valoron trans
postaj vokoj:

    ```raku
    sub make-accumulator($start) {
        return -> $amount { state $total = $start; $total += $amount };
    }

    my $acc = make-accumulator(100);
    say $acc(10);
    say $acc(25);
    say $acc(-5);
    ```

    Ĉiu voko de `make-accumulator` produktas freŝan blokon kun sia propra
    `state $total`, do apartaj akumuliloj restas sendependaj — kaj la fermaĵo
    ĉirkaŭ `$start` ankoraŭ provizas al ĉiu propran komencan valoron.

{% include nav.html %}
