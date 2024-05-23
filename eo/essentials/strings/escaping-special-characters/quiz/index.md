---
title: 'Kvizo: Unu malantaŭa oblikvo en la eligo'
---

{% include menu.html %}

El la subaj kordoj, kontrolu tiujn, kiuj havos precize unu malantaŭan oblikvon `\` en la eligo se vi presas ilin.

{:.quiz}
0 | &quot;Level\n\t2&quot;
0 | &quot;Level\n\nTwo&quot;
1 | &apos;Storey\nTwo&apos;
1 | &apos;Tab is \t&apos;
0 | &quot;Using a tab\there&quot;
1 | &quot;//\\\\&quot; | La eligo estas `//\`
1 | &apos;//\\\\&apos; | Unu malantaŭa oblikvo eskapas la alian ĉi tie: `//\`.
1 | &apos;\&quot;&apos; | Neniu eskapado ĉi tie, la kordo aperas kiel estas: `\"`.

{% include quiz.html %}

## Komentoj

La ĉefa afero por rigardi ĉi tie estas la citiloj. Ili determinas la manieron kiel la `\`-prefiksitaj karakteroj estas eskapitaj.

{% include nav.html %}