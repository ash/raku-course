---
title: Kvizo — gist kaj Str
---

{% include menu.html %}

Kion presas la sekva programo?

```raku
my @a = 1, 2, 3;
say @a.Str;
```

{:.quiz}
0 | [1 2 3]
1 | 1 2 3
0 | (1 2 3)
0 | 1, 2, 3

{% include quiz.html %}

<div class="extended-explanation">

`.Str` donas la simplan ĉenformon, kie la elementoj estas simple kunigitaj per spacoj sen krampoj: `1 2 3`. La forma kun krampoj `[1 2 3]` estas tio, kion `.gist` (kaj do `say @a`) produktus.

</div>

{% include nav.html %}
