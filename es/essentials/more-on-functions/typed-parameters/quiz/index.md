---
title: Quiz — Parámetros tipados
---

{% include menu.html %}

## 1

Dada la función:

```raku
sub f(Rat $x) {
    say 2 * $x;
}
```

¿Cuáles llamadas son correctas?

{:.quiz}
0 | f(3); | Aunque `3` puede caber en un contenedor `Rat`, la llamada es incorrecta ya que `3` es `Int`, no un `Rat`.
1 | f(3.5);
0 | f(3e0);
0 | f(&apos;3&apos;);
1 | f(<4/5>); | Este es un número `Rat`.


## 2

Dada la función:

```raku
sub g(Int $a, Str $b) {
    say "Integer $a, string $b";
}
```

¿Cuáles llamadas son correctas?

{:.quiz}
0 | g(10, 20);
0 | g(&apos;10&apos;, 20); | Aunque cualquiera de los argumentos puede ser convertido, Raku exige el tipo exacto.
1 | g(10, &apos;20&apos;);
0 | g(&apos;10, 20&apos;); | Se pasó una única cadena.
0 | g(&apos;10&apos;, &apos;20&apos;); 


{% include quiz.html %}

{% include nav.html %}