---
title: 'Kvizo — Dissendo kun `where`'
translations_gpt:
---

{% include menu.html %}

Kion presas la sekva programo?

```raku
multi sub f(Int $n where $n %% 2) { say 'even' }
multi sub f(Int $n)               { say 'odd' }

f(4);
```

{:.quiz}
1 | even
0 | odd
0 | both
0 | nothing

{% include quiz.html %}

<div class="extended-explanation">

`4` plenumas la kondiĉon `where $n %% 2`, do la pli specifa kandidato estas elektita kaj `even` estas presita. La simpla `Int`-kandidato estas la ĝenerala kazo por ĉio, kio ne plenumas la kondiĉon.

</div>

{% include nav.html %}
