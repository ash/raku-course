---
title: Risinājums 'Vērtību apmaiņa'
---

{% include menu.html %}

Šajā programmā mēs izmantojam Raku sintakses elementus no sadaļas par [skalārajiem mainīgajiem](/lv/essentials/scalar-variables).

## Kods

```raku
my ($a, $b) = 10, 20;
($a, $b) = $b, $a;
say "$a, $b";
```

🦋 Jūs varat atrast pirmkodu failā [swap.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/swap.raku).

## Izvade

Palaidiet programmu un pārliecinieties, ka tā izdrukā vērtības citā secībā.

```console
$ raku exercises/scalar-variables/swap.raku
20, 10
```

## Komentāri

Visi šīs programmas soļi (mainīgā izveide un vērtību piešķiršana, to apmaiņa un izdrukāšana) izmanto abus mainīgos vienā konstrukcijā. Visinteresantākais šeit ir veids, kā mainīgie apmaina savas vērtības:

```raku
($a, $b) = $b, $a;
```

Pamaniet, ka jums ir nepieciešamas iekavas kreisajā pusē, bet jūs varat tās pievienot arī labajā pusē:

```raku
($a, $b) = ($b, $a);
```

Kas notiek, ja izlaidīsiet iekavas?

```raku
$a, $b = $b, $a;
```

Šajā gadījumā jūs saņemsiet brīdinājumu, ka `$a` labajā pusē netiek izmantots:

```
$ raku exercises/scalar-variables/swap.raku
BRĪDINĀJUMI par /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Bezjēdzīga $a izmantošana sink kontekstā (2. rinda, 2. rinda)
10, 20
```

Iepriekšējā rinda faktiski ir ekvivalenta bezjēdzīgai piešķiršanai `$b = $b`. To var viegli redzēt, ja modificējat vērtības labajā pusē, piemēram:

```raku
$a, $b = 2 * $b, 3 * $a;
```

Šī programma izdrukā vēl vairāk brīdinājumu, bet jūs varat arī redzēt, ka tikai `$b` mainīja savu vērtību:

```
$ raku exercises/scalar-variables/swap.raku
BRĪDINĀJUMI par /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Bezjēdzīga "*" izmantošana izteiksmē "3 * $a" sink kontekstā (2. rinda)
Bezjēdzīga $a izmantošana sink kontekstā (2. rinda)
10, 40
```

{% include nav.html %}