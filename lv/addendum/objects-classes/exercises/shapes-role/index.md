---
title: Figūras ar kopīgu lomu
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Definējiet lomu `Shape`, kas prasa metodi `area`, un tad izveidojiet klases
`Circle` un `Square`, kas pilda šo lomu.

Uzrakstiet apakšprogrammu `describe`, kuras parametrs ir *tipizēts* kā `Shape`, lai
tā pieņemtu jebkuru figūru un atteiktu visu, kas tāda nav. Tai jāizdrukā figūras
laukums, apzīmēts ar tās klases nosaukumu. Izsauciet to riņķim ar rādiusu `2` un
kvadrātam ar malu `3`.

Apakšprogramma nekad nepārbauda, kāda veida figūru tā saņēmusi: tā kā tās parametrs
ir `Shape`, objektam noteikti ir metode `area`, tāpēc viens un tas pats `.area`
izsaukums darbojas ar jebkuru ienākošo figūru. Tieši to loma jums dod —
vienu tipu, ko var pieprasīt, un vienu koda gabalu, kas ar katru šo lomu pildošu
klasi apietas vienādi.

## Piemērs

Programma izdrukā:

```
Circle: 12.56636
Square: 9
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
