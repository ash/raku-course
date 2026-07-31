---
title: Kvizo — Era kunteksto
---

{% include menu.html %}

Kion presas la sekva programo?

```raku
my @a = 1, 2, 3;
my $n = 0;
$n++ for $(@a);
say $n;
```

{:.quiz}
0 | 3
1 | 1
0 | 0
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

La kuntekstigilo `$( … )` trudas eran kuntekston, do la tabelo estas traktata kiel unuopa valoro anstataŭ listo de elementoj. La buklo `for` do vidas unu eron kaj ruligas sian korpon nur unufoje, lasante `$n` je `1`. Sen `$( )`, la buklo iterus tri fojojn.

</div>

{% include nav.html %}
