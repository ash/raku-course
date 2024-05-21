---
title: 'Viktorīna: Frāzes garums'
---

{% include menu.html %}

Ko metode `.chars` atgriezīs šādām virkņu vērtībām?

{:.quiz-select}
4 | &apos;Raku&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
13 | &apos;Raku & Rakudo&apos; — (: 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 :) | Atstarpes arī tiek skaitītas.
6 | &apos;Ça va?&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Ç ir viens Unicode rakstzīme.
0 | &apos;&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Tukša virkne.
2 | &apos;中国&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Vairāk nekā divi baiti UTF-8, bet joprojām tikai divas rakstzīmes.

{% include quiz.html %}
{% include nav.html %}