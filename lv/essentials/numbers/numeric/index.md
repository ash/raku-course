---
title: Peldošā punkta skaitļi
---

{% include menu.html %}

Iepriekšējā sadaļā mēs redzējām, ka tādi skaitļi kā `1.5` ir racionāli skaitļi. Lai izveidotu skaitli, kas atbilst `double` skaitlim C++, izmantojiet zinātnisko notāciju:

```raku
1E0
314e-2
-5e-20
5.424E40
7.6e+15
```

Šajā gadījumā Raku izveido `Num` datu tipa eksemplārus un iekšēji glabā datus kā IEEE skaitli.

## Iebūvētās konstantes

Zemāk ir uzskaitītas dažas konstantes, kuras varat izmantot uzreiz. Tās ir `Num` tipa skaitļi. Pieejamas gan ASCII, gan Unicode varianti:

`pi` | `π` | 3.141592653589793
`tau` | `τ` | vienāds ar `2 * π`
`e` | `𝑒` | 2.718281828459045

{% include nav.html %}