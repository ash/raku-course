---
title: 'Cuestionario: La longitud de una frase'
---

{% include menu.html %}

¿Qué devolverá el método `.chars` para las siguientes cadenas?

{:.quiz-select}
4 | &apos;Raku&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
13 | &apos;Raku & Rakudo&apos; — (: 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 :) | Los espacios también son contables.
6 | &apos;Ça va?&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Ç es un solo carácter Unicode.
0 | &apos;&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Una cadena vacía.
2 | &apos;中国&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Más de dos bytes en UTF-8, pero aún así solo dos caracteres.

{% include quiz.html %}
{% include nav.html %}