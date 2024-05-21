---
title: 'Ejercicio: ¿Visto antes?'
---

{% include menu.html %}

## Problema

Crea un programa que inicie un bucle con las siguientes acciones:

1. Pedir que se ingrese una palabra.
2. Si la palabra ya se ha visto una vez, imprimir `¡Visto!`.
3. Si la palabra se ha visto más de una vez, imprimir `¡Visto 2 veces!`, etc.
3. Repetir el bucle.

## Ejemplo

Un ejemplo de interacción con el programa:

```console
$ raku seen-before.raku
Palabra: Yo
Palabra: nunca
Palabra: vi
Palabra: una
Palabra: vi
¡Visto!
Palabra: eso
Palabra: vi
¡Visto 2 veces!
Verdadero
Palabra: como
Palabra: eso
¡Visto!
Palabra: vi
¡Visto 3 veces!
Verdadero
Palabra: aserrado
Palabra: ^C
```

Para detener el programa, presiona `Ctrl+C`.

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}