---
title: 'Quiz: A backslash in the output'
---

{% include menu.html %}

From the below strings, check those that will have precisely one slash in the output if you print them.

{:.quiz}
0 | &quot;Level\n\t2&quot;
0 | &quot;Level\n\nTwo&quot;
1 | &apos;Storey\nTwo&apos;
1 | &apos;Tab is \t&apos;
0 | &quot;Using a tab\there&quot;
1 | &quot;//\\\\&quot; | The output is `//\`
1 | &apos;//\\\\&apos; | One backslash escapes the other here: `//\`.
1 | &apos;\&quot;&apos; | No escaping here, the string appears as is: `\"`.

{% include quiz.html %}

## Comments

The main thing to look at here is the quotes. They determine the way the `\`-prefixed characters are escaped.

{% include nav.html %}
