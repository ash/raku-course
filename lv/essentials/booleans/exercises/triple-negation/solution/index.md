---
title: 'Risinājums: Trīskārša noliegšana'
---

{% include menu.html %}

Programmā, kas parādīta uzdevumā, ir kļūda un tā nesakompilēsies, nepieciešams neliels labojums. Šeit ir pareizā un strādājošā versija (pievienota atstarpe, lai atdalītu `!` un `!!`):

## Kods

```raku
my $value = False;
say ! !!$value;
```

🦋 Pilnu kodu var atrast failā [triple-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/triple-negation.raku).

## Izvade

Programma izdrukā apgrieztu Boolea vērtību, kā jūs droši vien gaidījāt:

```console
$ raku triple-negation.raku
True
```

## Komentāri

Bija nedaudz negaidīti, ka programma ar trim izsaukuma zīmēm nesakompilējās:

```console
$ raku triple-negation.raku
===SORRY!=== Error while compiling /Users/ash/raku-course/exercises/booleans/triple-negation.raku
Two terms in a row
at /Users/ash/raku-course/exercises/booleans/triple-negation.raku:2
------> say !!!⏏$value;
    expecting any of:
        infix
        infix stopper
        postfix
        statement end
        statement modifier
        statement modifier loop
```

Papildu atstarpe atrisina šo problēmu. Bet neiekļūstiet citā slazdā. Apsveriet šādu programmu:

```raku
my $value = False;
say !!! $value;
```

Šī programma kompilējas, bet beidzas ar šādu ziņojumu:

```console
$ raku triple-negation.raku
False
    in block <unit> at exercises/booleans/triple-negation.raku line 2
```

Tas notiek tāpēc, ka `!!!` ir īpašs operators, kas apzīmē koda daļu kā pagaidu kodu. Ja programma sasniedz šo punktu, tā beidzas un izdrukā ziņojumu, kurā mūsu gadījumā bija mainīgā `$value` pašreizējā vērtība. Sīkāku informāciju skatiet 📖 [dokumentācijā](https://docs.raku.org/routine/!!!).

{% include nav.html %}