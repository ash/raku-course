---
title: Laŭpetaj supply
translations_gpt:
---

{% include menu.html %}

_Laŭpeta_ supply produktas siajn valorojn denove por ĉiu konekto. `Supply.from-list` estas laŭpeta: ĉiu konekto ricevas la **tutan** sinsekvon de la komenco, sendepende de ajna alia konekto.

```raku
my $s = Supply.from-list(1, 2, 3);

my @a;
my @b;
$s.tap(-> $v { @a.push($v) });
$s.tap(-> $v { @b.push($v) });

say @a; # [1 2 3]
say @b; # [1 2 3]
```

Ambaŭ konektoj ricevis ĉiujn tri valorojn. La supply ne «elĉerpis» siajn valorojn ĉe la unua konekto; ĝi simple kuris denove por la dua. Jen la konduto, kiun vi volas, kiam supply reprezentas fiksitan fonton — liston, dosieron, informpeton — kiun ĉiu abonanto devus vidi plene.

Laŭpeta estas la defaŭlto por supply konstruitaj el ekzistantaj datumoj, ĉar ĉiu konsumanto nature atendas la kompletan sinsekvon. La alia speco, _viva_ supply, kondutas tute alie, kiel montras la sekva temo.

{% include nav.html %}
