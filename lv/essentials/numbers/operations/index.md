---
title: Operācijas ar skaitļiem
---

{% include menu.html %}

Nav šaubu, ka jūs jau zināt dažas operācijas, ko varat veikt ar Raku skaitļiem. Tikai jāpiemin, ka _operācijas_ simbols tiek saukts par _operatoru_. Objekti, uz kuriem mēs veicam operācijas, tiek saukti par _operandiem_.

## Aritmētika

**Operators** | **Operācija**
`+` | Saskaitīšana
`-` | Atņemšana
`*` | Reizināšana
`/` | Dalīšana

Tā kā Raku [ļoti labi atbalsta Unicode](/lv/essentials/on-unicode), dažiem no šiem operatoriem ir ne-ASCII ekvivalenti:

`×` | Reizināšana
`÷` | Dalīšana

Lai mainītu izpildes secību, izmantojiet iekavas:

```raku
say 3 * 4 + 5;   # 17
say 3 * (4 + 5); # 27
```

## Modulis

Moduļa operators ir `%`, kā daudzās citās valodās.

`%` | Modulis

Tas atgriež divu skaitļu veselo dalījumu atlikumu, tāpēc `10 % 3` ir `1`. Ņemiet vērā, ka `-10 % 3` ir `2`, jo operācijas rezultāts tiek definēts kā starpība starp pirmo skaitli un noapaļoto dalījumu, kas reizināts ar otro skaitli. Tātad, `$a % $b` ir ekvivalents `$a - $b * floor($a / $b)`.

## Dalāmība

Raku pievieno noderīgu operatoru, lai pārbaudītu, vai skaitlis ir dalāms ar citu skaitli.

`%%` | Dalāmība

Tas ir infiksu operators, kam nepieciešami divi operandi: `10 %% 3`. Ja pirmais operands ir dalāms ar otro operandu, rezultāts ir Būla `True`. Pretējā gadījumā `False`.

## Veselo skaitļu operācijas

Ir īpašas operācijas, kas atgriež veselu skaitļu rezultātus. To operatori ir vārdi, nevis simboli.

`div` | Veselo skaitļu dalīšana
`mod` | Veselo skaitļu modulis

`div` operators noapaļo rezultātu uz leju, tāpēc `10 div 3` ir `3`, un `-10 div 3` ir `-4`.

Gan `div`, gan `mod` pieprasa veselu skaitļu operandus. Tāpēc šāda programma nedarbosies, ja jūs atkomentēsiet rindas, kas atzīmētas kā `Kļūda`:

```raku
say 10.3 % 3;     # OK
# say 10.3 mod 3; # Kļūda

say 10.3 / 3.3;     # OK
# say 10.3 div 3.3; # Kļūda
```

## Pakāpe

Ir divi veidi, kā iegūt _x_ pakāpē _y_ rezultātu. Pirmkārt, jūs varat izmantot `**` operatoru:

```raku
say 3 ** 4; # 81
```

Otrkārt, jūs varat izmantot augšraksta ciparus, piemēram:

```raku
say 3⁴; # 81
```

Ir iespējams izmantot vairāk nekā vienu augšraksta ciparu, lai iegūtu vērtību, kas ir lielāka par 9. Piemēram:

```raku
say 2¹⁵; # 32768
```

Negatīva pakāpe arī nav problēma:

```raku
say 2 ** (-2); ## 0.25
say 2⁻²; # 0.25
```

Ņemiet vērā, ka pēdējo divu izteiksmju rezultāts ir `Rat` skaitlis.

## Operācijas ar piešķiršanu

Visas operācijas atbalsta saīsināto sintaksi, kad nepieciešams atjaunināt mainīgo. Demonstrēsim to ar `+` piemēru.

Pilnā forma

```raku
$a = $a + $b;
```

ir ekvivalenta:

```raku
$a += $b;
```

{% include nav.html %}