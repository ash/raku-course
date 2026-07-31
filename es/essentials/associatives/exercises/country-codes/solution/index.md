---
title: 'Solution: Códigos de países'
---

{% include menu.html %}

En este programa, convertir un código a un nombre se realiza como una búsqueda en un hash `%cc{$_}` en un bucle sobre el array `@codes`.

## Código

Aquí está la posible solución (no se muestran todos los países):

```raku
my %cc =
    AD => 'Andorra',
    AE => 'Emiratos Árabes Unidos',

    # . . .

    ZM => 'Zambia',
    ZW => 'Zimbabue'
;

my @codes = < FR IT DE EE LV US CN IN BR >;

say %cc{$_} for @codes;
```

🦋 Encuentra el programa en el archivo [country-codes.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/country-codes.raku).

## Salida

Para los códigos de entrada dados, el programa imprime la siguiente lista de países:

```console
$ raku exercises/associatives/country-codes.raku
Francia
Italia
Alemania
Estonia
Letonia
Estados Unidos de América
China
India
Brasil
```

{% include nav.html %}