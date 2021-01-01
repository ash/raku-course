---
title: 'Quiz: The length of a phrase'
---

{% include menu.html %}

What will the `.chars` method return for the following strings?

{:.quiz-select}
4 | &apos;Raku&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
13 | &apos;Raku & Rakudo&apos; — (: 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 :) | Spaces are also countable.
6 | &apos;Ça va?&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Ç is a single Unicode character.
0 | &apos;&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | An empty string.
2 | &apos;中国&apos; — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | More than two bytes in UTF-8, but still only two characters.

{% include quiz.html %}
{% include nav.html %}
