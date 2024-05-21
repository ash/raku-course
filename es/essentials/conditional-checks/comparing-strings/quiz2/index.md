---
title: Quiz 2 — la condición en if
---

{% include menu.html %}

Corrige el programa y responde la pregunta.

{:.quiz-code .fill}
. | my $password = prompt 'Introduce tu contraseña: ';
. | 
eq = | if $password ␣␣ '*&(#&$#Y' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Correcto';
. | }
. | else {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Incorrecto';
. | }


Con el `=` en la prueba, ¿qué hace este programa?

{:.quiz-select}
Siempre imprime ‘Correcto’ | Tu respuesta:&nbsp; (: Siempre imprime ‘Correcto’, Siempre imprime ‘Incorrecto’, Imprime ‘Correcto’ para contraseñas correctas e ‘Incorrecto’ para incorrectas, Imprime ‘Incorrecto’ para contraseñas correctas y ‘Correcto’ para incorrectas :)

<div class="extended-explanation">El programa siempre imprime ‘Correcto’ porque <code>$password = '*&(#&$#Y'</code> es una asignación que establece el nuevo valor de la variable <code>$password</code>. Como el valor no es ni cero ni una cadena vacía, se considera <code>True</code>. La contraseña que el usuario introduce nunca se verifica en este caso.<br/><br/>Si escribes <code>==</code>, entonces el programa fallará al intentar convertir las cadenas (la contraseña del usuario y la contraseña correcta) a números y fallará.</div>

{% include quiz.html %}

{% include nav.html %}