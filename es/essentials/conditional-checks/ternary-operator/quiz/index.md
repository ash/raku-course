---
title: Quiz — Operador ternario
---

{% include menu.html %}

Rellena los espacios en el programa:

{:.quiz-code}
. | my $color = prompt &apos;¿De qué color es? &apos;;
?? | say $color eq &apos;azul&apos; ␣␣
!! | &nbsp;&nbsp;&nbsp;&nbsp;&apos;¡Esto es un cielo!&apos; ␣␣ 
. | &nbsp;&nbsp;&nbsp;&nbsp;&apos;Necesito más información.&apos;;

{% include quiz.html %}

## Comentario

El compilador Rakudo tiene un mensaje de error especial para el error más común que puedes cometer al usar el operador ternario en Raku.

    ===SORRY!=== Error while compiling /Users/ash/raku-course/t.raku
    Unsupported use of ?  and : for the ternary conditional operator.  In
    Raku please use: ??  and !!.
    at /Users/ash/raku-course/t.raku:2
    ------> say $color eq 'blue' ?⏏ 'This is a sky!' : 'I need more informa

{% include nav.html %}