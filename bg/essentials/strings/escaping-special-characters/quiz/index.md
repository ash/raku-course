---
title: 'Quiz: A backslash in the output'
---

{% include menu.html %}

От следните низове, отбележете тези, които ще имат точно една обратна наклонена черта `\` в изхода, ако ги отпечатате.

{:.quiz}
0 | &quot;Level\n\t2&quot;
0 | &quot;Level\n\nTwo&quot;
1 | &apos;Storey\nTwo&apos;
1 | &apos;Tab is \t&apos;
0 | &quot;Using a tab\there&quot;
1 | &quot;//\\\\&quot; | Изходът е `//\`
1 | &apos;//\\\\&apos; | Една обратна наклонена черта избягва другата тук: `//\`.
1 | &apos;\&quot;&apos; | Няма избягване тук, низът се появява както е: `\"`.

{% include quiz.html %}

## Коментари

Основното нещо, което трябва да се разгледа тук, са кавичките. Те определят начина, по който символите, предшествани от `\`, се избягват.

{% include nav.html %}