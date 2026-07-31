---
title: Failu un direktoriju dzēšana
translations_gpt:
---

{% include menu.html %}

Tāpat kā `spurt` un `mkdir` uz diska lietas rada, divas rutīnas tās noņem.

Rutīna `unlink` dzēš failu:

```raku
spurt 'temp.txt', 'scratch data';
say 'temp.txt'.IO.e; # True

unlink 'temp.txt';
say 'temp.txt'.IO.e; # False
```

`unlink` izdzēš nosaukto failu. Tāpat kā pārējām failu sistēmas rutīnām, arī tai ir metodes forma uz ceļa objekta — `'temp.txt'.IO.unlink`.

Dzēšana ir tūlītēja un neatgriezeniska: nav nekādas miskastes, no kuras atgūt. Ievērojiet, ka pēc faila pazušanas tā esamība jāpārbauda ar `.e` (esamība), nevis ar `.f`, jo tipa pārbaudes `.f` un `.d` izmet izņēmumu, kad ceļa nav.

Rutīna `rmdir` noņem direktoriju, taču tikai **tukšu**:

```raku
mkdir 'reports';
rmdir 'reports';
say 'reports'.IO.e; # False
```

Ja direktorijā vēl kaut kas ir, `rmdir` nenoņem neko un atstāj to savā vietā. Tāpēc, lai izdzēstu direktoriju, kurā ir faili, vispirms to iztukšojat un tikai tad noņemat:

```raku
mkdir 'reports';
spurt 'reports/jan.txt', 'January';
spurt 'reports/feb.txt', 'February';

.unlink for 'reports'.IO.dir;   # delete every entry
rmdir 'reports';                # now the directory is empty
say 'reports'.IO.e;             # False
```

`'reports'.IO.dir` uzskaita direktorijas ierakstus (iepriekšējais temats to aplūkoja), un `.unlink` izsaukums katram tos noņem. Kad direktorija ir tukša, `rmdir` to var aiznest. (Šis plakanais cikls pieņem, ka direktorijā ir tikai faili; kokam ar ligzdotām apakšdirektorijām vispirms būtu tajās jāieiet rekursīvi.)

{% include nav.html %}
