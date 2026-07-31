---
title: 'Solvo: Kribrilo de Eratosteno'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $limit = 30;
my %composite;

for 2 .. $limit -> $i {
    next if %composite{$i};
    for ($i², $i² + $i ... $limit) -> $multiple {
        %composite{$multiple} = True;
    }
}

say (2..$limit).grep({ !%composite{$_} });
```

🦋 Vi povas trovi la fontkodon en la dosiero [sieve.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/sieve.raku).

## Eligo

```
(2 3 5 7 11 13 17 19 23 29)
```

## Komentoj

1. Anstataŭ listo de flagoj, `%composite` memoras, kiuj nombroj estis
forstrekitaj. Nombro ankoraŭ mankanta en ĝi, kiam venas ĝia vico, estas prima.

1. Por ĉiu primo `$i`, ĝiaj obloj estas generataj kiel la sekvenco
`$i², $i² + $i ... $limit` kaj markataj kiel kunmetitaj. Komenci ĉe `$i²` preterpasas
oblojn jam traktitajn de pli malgrandaj primoj.

1. Ĉi tio estas unu sola [sekvenco](/eo/paradigms/lazy/sequence-operator), ne C-stila
kapo de `for`. La operatoro `...` prenas la unuajn du valorojn, eltrovas la paŝon
inter ili kaj daŭrigas ĝis la limo. Por `$i` = `3` tio signifas komenci
ĉe `9`, poste `12`, do la paŝo estas `3`, kaj la buklo trairas la tutan liston:

    ```raku
    my $i = 3;
    say ($i², $i² + $i ... 30); # (9 12 15 18 21 24 27 30)
    ```

    Do `for` ricevas unu liston por trairi — `9, 12, 15, …` — prefere ol tri
apartajn klaŭzojn.

1. `$i²` kvadratigas la nombron per Unikoda superskribo. Raku akceptas ĉiujn tri el
`$i * $i`, `$i ** 2` kaj `$i²` — ili kalkulas precize la saman valoron, do elektu
tiun, kiu legiĝas plej bone por vi. La superskribaj ciferoj (`²`, `³`, …) estas
ordinaraj signoj, kiujn vi povas tajpi aŭ alglui rekte en la fontkodon.

{% include nav.html %}
