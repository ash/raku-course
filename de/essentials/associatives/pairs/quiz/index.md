---
title: Quiz — Paare
---

{% include menu.html %}

## 1

Vervollständigen Sie das Programm, um die folgende Ausgabe zu drucken:

    Indien
    Neu-Delhi

Hier ist das Programm:

{:.quiz-code}
. | my $city = Indien => &apos;Neu-Delhi&apos;;
key | say $city.␣␣␣␣;
value | say $city.␣␣␣␣;

## 2

Was gibt dieses Programm aus?

```raku
my $data = 1 => 2;
say $data.WHAT;
```

{:.quiz-select}
(Paar) | Ausgabe: (: (Int), (Array), (Pair) :) | Dies ist ein Paar `Pair $data = 1 => 2`, bei dem sowohl der Schlüssel als auch der Wert Ganzzahlen sind.

{% include quiz.html %}

{% include nav.html %}