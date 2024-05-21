---
title: Quiz — if, elsif, else
---

{% include menu.html %}

Completa el siguiente programa. Aquí hay un procedimiento de verificación de contraseña. Llena las partes que faltan. (Considéralo solo un ejercicio.)

{:.quiz-code}
. | my $password = prompt 'Introduce tu contraseña: ';
if | ␣␣␣␣␣ $password eq '12345' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say '¿En serio?';
. | }
elsif | ␣␣␣␣␣ $password.chars < 3 {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Demasiado corta';
. | }
elsif | ␣␣␣␣␣ $password eq '*&(#&$#Y' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Contraseña correcta';
. | }
else | ␣␣␣␣␣ {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Contraseña incorrecta';
. | }

{% include quiz.html %}

{% include nav.html %}