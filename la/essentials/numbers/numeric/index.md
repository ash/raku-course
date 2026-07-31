---
title: Numeri fluitantes
---

{% include menu.html %}

In sectione praecedente, vidimus numeros tales ut `1.5` esse numeros rationales. Ad numerum faciendum qui correspondet numero `double` in C++, utere notatione scientifica:

```raku
1E0
314e-2
-5e-20
5.424E40
7.6e+15
```

In hoc casu, Raku creat instantiarum generis `Num` et recondit data ut numerus IEEE interne.

## Constantes inbuilt

Paucae constantes infra enumeratae sunt quas statim uti potes. Sunt numeri generis `Num`. Utraque variant ASCII et Unicode praesto sunt:

`pi` | `π` | 3.141592653589793
`tau` | `τ` | aequale `2 * π`
`e` | `𝑒` | 2.718281828459045

{% include nav.html %}