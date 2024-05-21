---
title: 'Uzdevums: Ja skaitlis ir robežās'
---

{% include menu.html %}

## Problēma

Uzrakstiet programmu, kas prasa ievadīt trīs skaitļus: `$begin`, `$end` un `$n`, un izdrukā `True` vai `False` atkarībā no tā, vai `$n` ir diapazonā `[$begin, $end)` (ieskaitot `$begin`, bet izslēdzot `$end`).

Pieņemiet, ka ievadītie skaitļi atbilst nosacījumam: `$begin < $end + 1`, bet nepievienojiet kodu, lai to pārbaudītu.

## Piemērs

Iespējamais programmas izvads abos gadījumos ir parādīts zemāk:

```console
$ raku number-in-limits.raku
No (ieskaitot): 10
Līdz (izslēdzot): 20
Kāds ir skaitlis? 15
True

$ raku number-in-limits.raku
No (ieskaitot): 10
Līdz (izslēdzot): 20
Kāds ir skaitlis? 30
False
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}