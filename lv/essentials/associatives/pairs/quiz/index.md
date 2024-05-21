---
title: Viktorīna — Pāri
---

{% include menu.html %}

## 1

Pabeidziet programmu, lai izdrukātu šādu izvadi:

    India
    New Delhi

Šeit ir programma:

{:.quiz-code}
. | my $city = India => &apos;New Dehli&apos;;
key | say $city.␣␣␣␣;
value | say $city.␣␣␣␣;

## 2

Ko šī programma izdrukā?

```raku
my $data = 1 => 2;
say $data.WHAT;
```

{:.quiz-select}
(Pair) | Izvade: (: (Int), (Array), (Pair) :) | Tas ir pāris `Pair $data = 1 => 2`, kur gan atslēga, gan vērtība ir veseli skaitļi.

{% include quiz.html %}

{% include nav.html %}