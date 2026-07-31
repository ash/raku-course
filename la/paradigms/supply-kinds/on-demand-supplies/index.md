---
title: Supply ad petitionem
translations_gpt:
---

{% include menu.html %}

Supply _ad petitionem_ valores suos denuo pro omni coniunctione producit. `Supply.from-list` ad petitionem est: unaquaeque coniunctio **totam** seriem ab initio accipit, independenter ab omni alia coniunctione.

```raku
my $s = Supply.from-list(1, 2, 3);

my @a;
my @b;
$s.tap(-> $v { @a.push($v) });
$s.tap(-> $v { @b.push($v) });

say @a; # [1 2 3]
say @b; # [1 2 3]
```

Utraque coniunctio omnes tres valores accepit. Supply valores suos in prima coniunctione non «consumpsit»; simpliciter pro secunda iterum cucurrit. Hi sunt mores quos vis cum supply fontem fixum repraesentat — indicem, archivum, interrogationem — quem omnis subscriptor plenum videre debet.

Ad petitionem est modus ex more pro supply ex datis exsistentibus aedificatis, quia unusquisque consumptor naturaliter seriem completam exspectat. Alterum genus, supply _vivum_, longe aliter se gerit, ut argumentum sequens ostendit.

{% include nav.html %}
