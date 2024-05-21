---
title: Notazione scientifica in Raku
---

{% include menu.html %}

Nella sezione precedente, abbiamo visto che numeri come `1.5` sono numeri razionali. Per creare un numero che corrisponde a un numero `double` in C++, usa la notazione scientifica:

```raku
1E0
314e-2
-5e-20
5.424E40
7.6e+15
```

In questo caso, Raku crea istanze del tipo di dato `Num` e memorizza i dati internamente come un numero IEEE.

## Costanti integrate

Ci sono alcune costanti elencate di seguito che puoi usare direttamente. Sono numeri del tipo `Num`. Sono disponibili sia le varianti ASCII che Unicode:

`pi` | `π` | 3.141592653589793
`tau` | `τ` | uguale a `2 * π`
`e` | `𝑒` | 2.718281828459045

{% include nav.html %}