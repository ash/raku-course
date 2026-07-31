---
title: Kvizo — Supply
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my $out = '';
Supply.from-list('a', 'b', 'c').tap(-> $v { $out ~= $v.uc });
say $out;
```

{:.quiz}
1 | ABC
0 | abc
0 | a b c
0 | C

{% include quiz.html %}

<div class="extended-explanation">

La konekto plenumiĝas unufoje por ĉiu valoro, kiun la supply eligas. Ĉiufoje ĝi majuskligas la valoron kaj almetas ĝin al `$out`, do `a`, `b`, `c` fariĝas `A`, `B`, `C`, kunigitaj en `ABC`. La bloko reagas al la tuta fluo, ne nur al la lasta valoro — kaj tial la respondo ne estas simple `C`.

</div>

{% include nav.html %}
