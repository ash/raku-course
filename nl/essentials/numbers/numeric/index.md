---
title: Wetenschappelijke notatie in Raku
---

{% include menu.html %}

In de vorige sectie zagen we dat getallen zoals `1.5` rationale getallen zijn. Om een getal te maken dat overeenkomt met een `double` getal in C++, gebruik je wetenschappelijke notatie:

```raku
1E0
314e-2
-5e-20
5.424E40
7.6e+15
```

In dit geval maakt Raku instanties van het `Num` datatype en slaat de gegevens intern op als een IEEE-getal.

## Ingebouwde constanten

Er zijn een paar constanten hieronder opgesomd die je direct kunt gebruiken. Het zijn de getallen van het `Num` type. Zowel ASCII- als Unicode-varianten zijn beschikbaar:

`pi` | `π` | 3.141592653589793
`tau` | `τ` | gelijk aan `2 * π`
`e` | `𝑒` | 2.718281828459045

{% include nav.html %}