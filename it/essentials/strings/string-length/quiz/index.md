---
title: 'Quiz: La lunghezza di una frase'
---

{% include menu.html %}

Cosa restituirà il metodo `.chars` per le seguenti stringhe?

{:.quiz-select}
4 | &apos;Raku&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
13 | &apos;Raku & Rakudo&apos; — (: 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 :) | Anche gli spazi sono conteggiabili.
6 | &apos;Ça va?&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Ç è un singolo carattere Unicode.
0 | &apos;&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Una stringa vuota.
2 | &apos;中国&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Più di due byte in UTF-8, ma comunque solo due caratteri.

{% include quiz.html %}
{% include nav.html %}