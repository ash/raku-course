---
title: Interpolación de código en cadenas de Raku
---

{% include menu.html %}

El siguiente nivel de interpolación es la interpolación de código. Te permite tener código simple (¡y complejo también!) directamente dentro de una cadena entre comillas dobles.

El código interpolado se coloca entre llaves:

```raku
my $a = 10;
my $b = 20;
say "La suma de $a y $b es {$a + $b}.";
```

El programa imprime:

```console
$ raku t.raku 
La suma de 10 y 20 es 30.
```

## Variables de nuevo

Una de las aplicaciones de este método es ayudar a desambiguar situaciones cuando una variable debe ser seguida por un texto que puede ser malinterpretado como la continuación del nombre de la variable. Para evitar eso, usa llaves para encerrar la variable:

```raku
my $how-many = 5;
my $what = 'traje';
say "Hay $how-many {$what}s."; # Hay 5 trajes.
```

Sin las llaves, Raku intentaría interpolar una variable inexistente `$whats`.

{% include nav.html %}