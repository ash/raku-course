---
title: 'Solución: Deletrear un número'
---

{% include menu.html %}

El programa a continuación tiene un array incorporado con los nombres de los números del 0 al 20 y los nombres de las decenas: 20, 30, etc. En la cadena de comprobaciones condicionales, el número se distribuye a una de las reglas de deletreo.

## Código

```raku
my $n = @*ARGS[0];

my @names = <
    zero one two three four five six seven eight nine ten
    eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty
    thirty fourty fifty sixty seventy eighty ninety >;

if $n < 20 {
    say @names[$n];
}
elsif $n % 10 { # Números de dos dígitos no redondos, por ejemplo, 34
    say @names[$n / 10 + 18] ~ '-' ~ @names[$n % 10];
}
else { # Múltiplos de 10, por ejemplo, 50
    say @names[$n / 10 + 18];
}
```

🦋 Encuentra el programa en el archivo [spell-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/spell-a-number.raku).

## Ejemplo

Ejecuta el programa varias veces para verificar las tres ramas de la construcción `if`—`elsif`—`else`.

```console
$ raku exercises/positionals/spell-a-number.raku 5
five

$ raku exercises/positionals/spell-a-number.raku 12
twelve

$ raku exercises/positionals/spell-a-number.raku 67
sixty-seven

$ raku exercises/positionals/spell-a-number.raku 80
eighty
```

{% include nav.html %}