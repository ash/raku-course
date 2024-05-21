---
title: Quiz — Coppie
---

{% include menu.html %}

## 1

Completa il programma per stampare il seguente output:

    India
    New Delhi

Ecco il programma:

{:.quiz-code}
. | my $city = India => &apos;New Dehli&apos;;
key | say $city.␣␣␣␣;
value | say $city.␣␣␣␣;

## 2

Cosa stampa questo programma?

```raku
my $data = 1 => 2;
say $data.WHAT;
```

{:.quiz-select}
(Pair) | Output: (: (Int), (Array), (Pair) :) | Questa è una coppia `Pair $data = 1 => 2`, dove sia la chiave che il valore sono interi.

{% include quiz.html %}

{% include nav.html %}