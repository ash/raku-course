---
title: Supply pēc pieprasījuma
translations_gpt:
---

{% include menu.html %}

Supply _pēc pieprasījuma_ savas vērtības rada no jauna katram pieslēgumam. `Supply.from-list` ir tieši tāda: katrs pieslēgums saņem **visu** virkni no paša sākuma, neatkarīgi no jebkura cita pieslēguma.

```raku
my $s = Supply.from-list(1, 2, 3);

my @a;
my @b;
$s.tap(-> $v { @a.push($v) });
$s.tap(-> $v { @b.push($v) });

say @a; # [1 2 3]
say @b; # [1 2 3]
```

Abi pieslēgumi saņēma visas trīs vērtības. Supply savas vērtības pirmajā pieslēgumā «neizlietoja»; tā vienkārši nostrādāja vēlreiz otrajam. Šī ir tā uzvedība, kas vajadzīga, kad supply pārstāv nemainīgu avotu — sarakstu, failu, vaicājumu —, kas katram abonentam būtu jāredz pilnībā.

Pēc pieprasījuma ir noklusējums supply, kas uzbūvētas no jau esošiem datiem, jo katrs patērētājs dabiski gaida pilnu virkni. Otrs veids, _dzīvā_ supply, uzvedas pavisam citādi, kā rāda nākamais temats.

{% include nav.html %}
