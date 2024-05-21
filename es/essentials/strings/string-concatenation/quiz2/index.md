---
title: 'Quiz 1: Concatenar cadenas y números'
---

{% include menu.html %}

Raku convierte automáticamente un número si deseas concatenarlo a una cadena. En cada una de las partes a continuación, selecciona las líneas que imprimen la cadena requerida.

## 1

¿Cuáles de las líneas imprimen `Alpha2`?

{:.quiz}
1 | say &apos;Alpha2&apos;;
0 | say &apos;Alpha&apos; 2; | Un espacio es un error de sintaxis aquí.
1 | say &apos;Alpha&apos;, &apos;2&apos;; | No hay concatenación de cadenas, pero el resultado es correcto.
1 | say &apos;Alpha&apos; ~ &apos;2&apos;;
1 | say &apos;Alpha&apos; ~ 2; | Un número se convierte en una cadena y luego se concatena.
0 | say &apos;Alpha&apos; + 2; | Un `+` no hace concatenación de cadenas.
0 | say &apos;Alpha&apos; . 2; | Tampoco lo hace un `.`.

## 2

¿Cuáles de estas líneas imprimen `123`?

{:.quiz}
1 | say 1 ~ 2 ~ 3; | Concatenación de cadenas aquí, incluso para números.
0 | say 1 + 2 + 3; | Una expresión aritmética regular.
1 | say &apos;1&apos; ~ &apos;2&apos; ~ &apos;3&apos;; | Los caracteres individuales también son cadenas.
0 | say &apos;1&apos; + &apos;2&apos; + &apos;3&apos;; | Como hay un `+`, las cadenas se convierten en números.
1 | say 1 ~ 23;
1 | say 12 ~ 3;
1 | say 123 ~ &apos;&apos;; | `''` es una cadena vacía, por lo que agregarla no cambia el resultado.

{% include quiz.html %}

{% include nav.html %}