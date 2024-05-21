---
title: 'Quiz: Ein Backslash in der Ausgabe'
---

{% include menu.html %}

Von den untenstehenden Zeichenketten, markieren Sie diejenigen, die genau einen Backslash `\` in der Ausgabe haben, wenn Sie sie drucken.

{:.quiz}
0 | &quot;Level\n\t2&quot;
0 | &quot;Level\n\nTwo&quot;
1 | &apos;Storey\nTwo&apos;
1 | &apos;Tab is \t&apos;
0 | &quot;Using a tab\there&quot;
1 | &quot;//\\\\&quot; | Die Ausgabe ist `//\`
1 | &apos;//\\\\&apos; | Ein Backslash entkommt dem anderen hier: `//\`.
1 | &apos;\&quot;&apos; | Keine Flucht hier, die Zeichenkette erscheint wie sie ist: `\"`.

{% include quiz.html %}

## Kommentare

Das Hauptaugenmerk liegt hier auf den Anführungszeichen. Sie bestimmen, wie die `\`-präfixierten Zeichen entkommen.

{% include nav.html %}