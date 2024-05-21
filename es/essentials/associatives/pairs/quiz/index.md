---
title: Quiz — Pairs
---

{% include menu.html %}

## 1

Completa el programa para imprimir el siguiente resultado:

    India
    New Delhi

Aquí está el programa:

{:.quiz-code}
. | my $city = India => &apos;New Dehli&apos;;
key | say $city.␣␣␣␣;
value | say $city.␣␣␣␣;

## 2

¿Qué imprime este programa?

```raku
my $data = 1 => 2;
say $data.WHAT;
```

{:.quiz-select}
(Pair) | Salida: (: (Int), (Array), (Pair) :) | Esto es un par `Pair $data = 1 => 2`, donde tanto la clave como el valor son enteros.

{% include quiz.html %}

{% include nav.html %}