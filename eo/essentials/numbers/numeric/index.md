---
title: Flosantaj nombroj
---

{% include menu.html %}

En la antaŭa sekcio, ni vidis, ke nombroj kiel `1.5` estas raciaj nombroj. Por fari nombron kiu respondas al `double` nombro en C++, uzu sciencan notacion:

```raku
1E0
314e-2
-5e-20
5.424E40
7.6e+15
```

En ĉi tiu kazo, Raku kreas ekzemplerojn de la `Num` datumtipo kaj stokas la datumojn kiel IEEE nombro interne.

## Enkonstruitaj konstantoj

Estas kelkaj konstantoj listigitaj sube, kiujn vi povas uzi tuj. Ili estas nombroj de la `Num` tipo. Ambaŭ ASCII kaj Unikodaj variantoj estas disponeblaj:

`pi` | `π` | 3.141592653589793
`tau` | `τ` | egalas al `2 * π`
`e` | `𝑒` | 2.718281828459045

{% include nav.html %}