---
title: Kvizo — Prefikso aŭ postfikso
translations_gpt:
---

{% include menu.html %}

Vi vidis `++` skribitan *post* variablo, kiel postfikson. Ĝi ankaŭ povas esti skribita *antaŭ* ĝi. Kiu kategorio estas `++` en `++$x`?

```raku
my $x = 5;
say ++$x;
```

{:.quiz}
1 | prefix
0 | postfix
0 | infix
0 | postcircumfix

{% include quiz.html %}

<div class="extended-explanation">

Kategorio estas decidata pure laŭ *pozicio*. Skribita antaŭ sia unuopa operando, `++$x` estas **prefiksa** operatoro — la sama `++` estas postfikso, kiam skribita poste, kiel en `$x++`. Ambaŭ formoj inkrementas `$x`; la prefiksa redonas la novan valoron, do ĉi tio presas `6`.

</div>

{% include nav.html %}
