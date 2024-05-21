---
title: 'Quiz: Een backslash in de output'
---

{% include menu.html %}

Van de onderstaande strings, controleer welke precies één backslash `\` in de output zullen hebben als je ze afdrukt.

{:.quiz}
0 | &quot;Level\n\t2&quot;
0 | &quot;Level\n\nTwo&quot;
1 | &apos;Storey\nTwo&apos;
1 | &apos;Tab is \t&apos;
0 | &quot;Using a tab\there&quot;
1 | &quot;//\\\\&quot; | De output is `//\`
1 | &apos;//\\\\&apos; | Eén backslash ontsnapt aan de andere hier: `//\`.
1 | &apos;\&quot;&apos; | Geen ontsnapping hier, de string verschijnt zoals hij is: `\"`.

{% include quiz.html %}

## Opmerkingen

Het belangrijkste om hier naar te kijken zijn de aanhalingstekens. Ze bepalen de manier waarop de `\`-voorvoegseltekens worden ontsnapt.

{% include nav.html %}