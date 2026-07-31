---
title: Izmēra tipi un pārpilde
---

{% include menu.html %}

Papildus parastajam `int`, Raku piedāvā veselos skaitļus ar fiksētu bitu platumu: `int8`, `int16`, `int32`, `int64` un to neparakstītos partnerus `uint8`, `uint16`, `uint32`, `uint64`. Skaitlis norāda, cik bitus vērtība aizņem.

Fiksēts platums nozīmē fiksētu diapazonu. `int8` satur vērtības no `-128` līdz `127`; `uint8` satur no `0` līdz `255`. Tā kā krātuve nevar pieaugt, pārkāpjot augšējo robežu, vērtība apgriežas uz apakšējo — tā ir _pārplūšana_:

```raku
my int8 $i = 127;
$i++;
say $i; # -128
```

Pievienojot vieninieku lielākajam `int8`, netiek iegūts `128` (kas neietilptu); vērtība apgriežas uz mazāko vērtību, `-128`. Neparakstītie tipi arī apgriežas:

```raku
my uint8 $u = 255;
$u++;
say $u; # 0
```

Tas ir pretēji parastajam `Int`, kurš vienkārši pieaug tik liels, cik nepieciešams, un nekad nepārplūst. Kompromiss ir viss natīvo tipu ar fiksētu izmēru jēga: jūs pieņemat fiksētu diapazonu apmaiņā pret paredzamu, kompaktu un ātru krātuvi.

Izmantojiet natīvo tipu ar fiksētu izmēru, kad zināt savu datu diapazonu un vēlaties efektivitāti — piemēram, bināro datu baiti `uint8` masīvā. Parastai aritmētikai, kur skaitļi var pieaugt bez ierobežojumiem, palieciet pie `Int`.

{% include nav.html %}
