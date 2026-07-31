---
title: Kvizo — Superfluo
translations_gpt:
---

{% include menu.html %}

Kion presas la sekva programo?

```raku
my int8 $i = -128;
$i--;
say $i;
```

{:.quiz}
1 | 127
0 | -129
0 | -128
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

`int8` enhavas valorojn de `-128` ĝis `127`. Ĉirkaŭvolvado okazas ankaŭ ĉe la malsupra rando: malpliigi la plej malgrandan valoron ne povas doni `-129`, do ĝi faldiĝas ĉirkaŭen al la plej granda valoro, `127`.

</div>

{% include nav.html %}
