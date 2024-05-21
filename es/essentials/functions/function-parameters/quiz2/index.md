---
title: Quiz — Pasando argumentos
---

{% include menu.html %}

## 1

Hay una función con la siguiente definición:

```raku
sub f {
    say 'Función llamada';
}
```

Elige las llamadas correctas a esta función.

{:.quiz}
1 | f;
0 | f(&apos;&apos;); | La función no acepta ningún argumento, pero aquí se recibe uno.
0 | f &apos;&apos;; | Lo mismo que arriba.
1 | f(); | Esto está bien, no se pasan argumentos.
0 | f (); | Aquí se pasa un argumento (una lista vacía).
0 | f(10);

## 2

Hay otra función.

```raku
sub g($x, $y) {
    say "Llamada g($x, $y)";
}
```

Selecciona las llamadas correctas a esta función.

{:.quiz}
1 | g(10, 20);
0 | g 10 20; | No hay coma entre los argumentos.
0 | g(10); | Demasiados pocos argumentos: se requieren dos, se pasa uno.
1 | g 10, 20; | No se requieren paréntesis cuando no es ambiguo.
0 | g(10,); | No es una sintaxis válida.
0 | g(,20); | Tampoco es una sintaxis válida.
0 | g(&apos;10, 20&apos;); | Se pasa un solo argumento de cadena.
1 | g(&apos;palabra&apos;, 20); | Los argumentos pueden ser de diferentes tipos.
0 | g(10, 20, 30); | Demasiados argumentos.
0 | g 10, 20, 30; | Lo mismo aquí: se pasan tres argumentos.


{% include quiz.html %}

{% include nav.html %}