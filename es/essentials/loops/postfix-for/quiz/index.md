---
title: Quiz — Postfix for
---

{% include menu.html %}

Trata de completar el programa para que use la forma posfija de `for` y muestre el siguiente texto:

    A
    A
    B
    B
    C
    C

Aquí está el borrador del código:

{:.quiz-code}
. |
{ | ␣ 
. | &nbsp;&nbsp;&nbsp;&nbsp;.say;
. | &nbsp;&nbsp;&nbsp;&nbsp;.say;
} | ␣ for &apos;A&apos;..&apos;C&apos;;

<div class="extended-explanation">Este código es un ejemplo de cómo usar un bloque de código con el <code>for</code> posfijo. Nota que <code>for</code> debe aparecer en la misma línea que la llave de cierre. Si lo pones en una nueva línea, el bloque se separará del bucle y obtendrás un error de compilación: <code>Missing block</code>. Probablemente sea mejor evitar esta práctica de usar un bloque de código con constructos posfijos.</div>

{% include quiz.html %}

{% include nav.html %}