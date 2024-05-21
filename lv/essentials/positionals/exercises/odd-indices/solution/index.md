---
title: 'Risinājums: Nepāra indeksi'
---

{% include menu.html %}

Lai atrisinātu šo uzdevumu, varat izmantot `loop` konstrukciju un palielināt cilpas mainīgo par 2 katrā iterācijā. Bet jūs varat arī izmantot `for` cilpu un skenēt skaitļus no 1 līdz pusei no masīva garuma, un tad reizināt tos ar divi.

## Kods

Šeit ir risinājums:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21;

say @data[2 * $_ - 1] for 1 .. @data/2;
```

🦋 Atrodiet programmu failā [odd-indices.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/odd-indices.raku).

## Izvade

Vispirms palaidiet programmu ar sākotnējiem datu elementiem.

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
```

Pēc tam pievienojiet vēl vienu vienumu datiem:

```raku
my @data = 10, 12, 1, 5, -9, 8, 36, 18, 21, 22;
```

Pārliecinieties, ka jaunais elements ar nepāra indeksu parādās izvadē:

```console
$ raku exercises/positionals/odd-indices.raku
12
5
8
18
22
```

## Komentāri

Nākamajā kursa daļā mēs atgriezīsimies pie šī uzdevuma, lai to atrisinātu, izmantojot pilnīgi citu pieeju.

{% include nav.html %}