---
title: 'Risinājums: Fibonači skaitļi'
---

{% include menu.html %}

Šis algoritms definē Fibonači skaitļus.

1. _F<sub>0</sub>_ = 0, _F<sub>0</sub>_ = 1
2. _F<sub>n</sub>_ = _F<sub>n-1</sub>_ + _F<sub>n-2</sub>_

## Kods

Kods īsteno algoritmu burtiski. Tas izmanto pāris mainīgos, lai saglabātu pašreizējos divus Fibonači skaitļus un atjaunina tos ciklā. Ņemiet vērā, ka abi mainīgie tiek atjaunināti [vienā piešķiršanā](/lv/essentials/scalar-variables/assigning-a-value/#multiple-assignment).

```raku
my $a = 0;
my $b = 1;

say $a;
for ^19 {
    ($a, $b) = $b, $a + $b;
    say $a;
}
```

🦋 Atrodiet programmu failā [fibonacci-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/fibonacci-numbers.raku).

## Izvade

Šeit ir programmas izvade, kas izdrukā pirmos 20 skaitļus.

```console
$ raku exercises/loops/fibonacci-numbers.raku
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
```

## Vairāk par šo tēmu

Atcerieties šo uzdevumu, jo mēs atgriezīsimies pie tā nākotnē, lai iegūtu citu aizraujošu risinājumu ar Raku _sekvencēm_.

{% include nav.html %}