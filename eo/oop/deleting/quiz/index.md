---
title: Kvizo — Forigi dosierojn
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
mkdir 'data';
spurt 'data/x.txt', 'hi';
rmdir 'data';
say 'data'.IO.e;
```

{:.quiz}
1 | True
0 | False
0 | eraron
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`rmdir` forigas nur **malplenan** dosierujon. Ĉi tie `data` ankoraŭ enhavas `x.txt`, do `rmdir` forigas nenion kaj lasas la dosierujon surloke. `.e` do ankoraŭ raportas `True`. Por forigi la dosierujon vi unue forigus ĝian enhavon (ekzemple per `.unlink for 'data'.IO.dir`) kaj poste vokus `rmdir`.

</div>

{% include nav.html %}
