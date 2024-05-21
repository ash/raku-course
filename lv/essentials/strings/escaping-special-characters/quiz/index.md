---
title: 'Viktorīna: Atpakaļslīpsvītra izvadei'
---

{% include menu.html %}

No zemāk esošajām virkņu opcijām atzīmējiet tās, kurām izvadē būs tieši viena atpakaļslīpsvītra `\`, ja tās izdrukāsit.

{:.quiz}
0 | &quot;Level\n\t2&quot;
0 | &quot;Level\n\nTwo&quot;
1 | &apos;Storey\nTwo&apos;
1 | &apos;Tab is \t&apos;
0 | &quot;Using a tab\there&quot;
1 | &quot;//\\\\&quot; | Izvade ir `//\`
1 | &apos;//\\\\&apos; | Viena atpakaļslīpsvītra šeit aizvieto otru: `//\`.
1 | &apos;\&quot;&apos; | Nav aizvietošanas šeit, virkne parādās kā ir: `\"`.

{% include quiz.html %}

## Komentāri

Galvenais, kam pievērst uzmanību šeit, ir pēdiņas. Tās nosaka, kā tiek aizvietoti `\`-prefiksēti rakstzīmes.

{% include nav.html %}