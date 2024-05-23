---
title: 'Quiz: A backslash in the output'
---

{% include menu.html %}

Ex infra chordis, illas quae unum precise habebunt backslash `\` in output si eas imprimis.

{:.quiz}
0 | &quot;Level\n\t2&quot;
0 | &quot;Level\n\nTwo&quot;
1 | &apos;Storey\nTwo&apos;
1 | &apos;Tab is \t&apos;
0 | &quot;Using a tab\there&quot;
1 | &quot;//\\\\&quot; | Output est `//\`
1 | &apos;//\\\\&apos; | Unus backslash alterum hic effugit: `//\`.
1 | &apos;\&quot;&apos; | Nullum effugium hic, chorda apparet ut est: `\"`.

{% include quiz.html %}

## Commentarii

Res principalis hic spectanda est quotationes. Determinant modum quo characteres `\`-praefixi effugiuntur.

{% include nav.html %}