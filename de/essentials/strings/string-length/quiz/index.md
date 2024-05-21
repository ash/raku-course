---
title: 'Quiz: Die Länge eines Satzes'
---

{% include menu.html %}

Was wird die Methode `.chars` für die folgenden Zeichenketten zurückgeben?

{:.quiz-select}
4 | &apos;Raku&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
13 | &apos;Raku & Rakudo&apos; — (: 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 :) | Leerzeichen werden auch gezählt.
6 | &apos;Ça va?&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Ç ist ein einzelnes Unicode-Zeichen.
0 | &apos;&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Eine leere Zeichenkette.
2 | &apos;中国&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Mehr als zwei Bytes in UTF-8, aber immer noch nur zwei Zeichen.

{% include quiz.html %}
{% include nav.html %}