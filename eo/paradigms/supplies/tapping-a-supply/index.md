---
title: Konektiĝi al supply
translations_gpt:
---

{% include menu.html %}

Por aboni al supply, vi _konektiĝas_ al ĝi: vi donas al `.tap` blokon, kaj tiu bloko plenumiĝas por ĉiu valoro, kiun la supply eligas. La plej simpla supply por eksperimenti estas `Supply.from-list`, kiu eligas la valorojn de listo:

```raku
my $s = Supply.from-list(1, 2, 3);
$s.tap(-> $v { say $v });
```

Ĉi tio presas:

```
1
2
3
```

La bloko `-> $v { say $v }` estas la _konekto_. La supply puŝas ĉiun valoron en ĝin laŭvice, do la bloko plenumiĝas trifoje, unufoje por ĉiu valoro.

La konekto povas fari ion ajn per la valoro, inkluzive akumuli rezulton:

```raku
my $total = 0;
Supply.from-list(1, 2, 3).tap(-> $v { $total += $v });
say $total; # 6
```

Ĉi tie ĉiu eligita valoro estas aldonata al `$total`, kiu finas ĉe `6`. Konektiĝi estas la baza ago de reaktiva programado: ligu pecon da konduto al fluo kaj lasu la fluon konduki ĝin.

{% include nav.html %}
