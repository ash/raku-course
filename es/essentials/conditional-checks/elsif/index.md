---
title: Usando eslif
---

{% include menu.html %}

Hasta ahora, hemos aprendido `if` y `else`. ¿Qué pasa si quieres organizar una cadena de pruebas? Hay al menos dos formas de hacerlo en Raku (de hecho, hay incluso más).

Una de las posibilidades es usar la cadena de bloques `if`, `elsif` y `else`. Nota la ortografía de `elsif`. No es ni `elseif` ni `else if`.

```raku
my $x = prompt 'Introduce el número: ';
if $x > 100 {
    say "$x es mayor que 100.";
}
elsif $x > 50 {
    say "$x es mayor que 50.";
}
elsif $x > 25 {
    say "$x es mayor que 25.";
}
else {
    say "$x es 25 o menor.";
}
```

En este programa, hay tres ramas y tres pruebas una tras otra. Tan pronto como una de las condiciones resulta ser `True`, se ejecuta el bloque de código correspondiente. Si ninguna verificación es `True`, se ejecuta el bloque `else`.

Aquí hay algunas ejecuciones de prueba del programa que activan todos los bloques:

```console
$ raku t.raku
Introduce el número: 120
120 es mayor que 100.

$ raku t.raku
Introduce el número: 75      
75 es mayor que 50.

$ raku t.raku
Introduce el número: 30
30 es mayor que 25.

$ raku t.raku
Introduce el número: 10
10 es 25 o menor.
```

Una forma alternativa es usar el par `given` y `when`, que aprenderemos en el futuro.

{% include nav.html %}