---
title: Ejercicio ‘Tabla de compra‘
---

{% include menu.html %}

## Problema

Crea un programa para imprimir la tabla de precios en el siguiente formato. Por favor, usa variables para almacenar los precios y los totales.

    Artículo    Precio   N      Total
    Sillas      $20.57   4      $82.28
    Mesas       $50.18   1      $50.18

N.B. Si no estás satisfecho con la elección de la moneda, siéntete libre de usar cualquier otra, pero no olvides que `$` [tiene un significado especial](/es/essentials/strings/escaping-special-characters) en las cadenas de Raku, por eso fue elegido para aprender mejor Raku.

## Ejemplo

Este programa no toma ninguna entrada, por lo que imprime la tabla anterior cuando lo ejecutas.

```console
$ raku purchase-table.raku
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}