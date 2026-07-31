---
title: 'Risinājums: Faktoriāls'
---

{% include menu.html %}

Faktoriāls no `N` ir veselu skaitļu reizinājums no 1 līdz ieskaitot `N`. Piemēram, 4 faktoriāls ir 1 * 2 * 3 * 4 = 24.

## Kods

```raku
my $n = 8;

my $f = 1;
$f *= $_ for 2..$n;

say $f;
```

🦋 Atrodi programmu failā [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/factorial.raku).

## Izvade

Palaid programmu vairākas reizes un izmēģini dažādas `$n` vērtības.

```console
$ raku exercises/loops/factorial.raku
40320
```

## Komentāri

Šī programma izmanto `*=` operatoru, kas ir saīsinājums reizināšanai ar piešķiršanu: `$x *= $y` ir ekvivalents `$x = $x * $y`.

Tu vari izmantot ‘pilnu’ ciklu postfix formas vietā:

```raku
my $n = 8;

my $f = 1;
for 2..$n -> $x {
    $f *= $x;
}

say $f;
```

## Vairāk par šo tēmu

Mēs atgriezīsimies pie šī uzdevuma vairākas reizes. Šajā kursa daļā mēs arī atrisināsim šo problēmu rekursīvi.

Kursa otrajā daļā mēs uzzināsim par tā sauktajiem reducēšanas operatoriem, kas padara risinājumu triviālu. Tāpat būs veids, kā definēt pielāgotu operatoru `!`, lai tu varētu rakstīt `$n!`, lai aprēķinātu faktoriālu. Visbeidzot, būs vēl viena iespēja redzēt interesantu risinājumu, kad runāsim par `where` klauzulu.

{% include nav.html %}