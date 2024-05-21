---
title: Uzdevums ‘Pirkumu tabula‘
---

{% include menu.html %}

## Problēma

Izveidojiet programmu, lai izdrukātu cenu tabulu šādā formātā. Lūdzu, izmantojiet mainīgos, lai saglabātu cenas un kopsummas.

    Prece    Cena    N      Kopā
    Krēsli   $20.57  4      $82.28
    Galdi    $50.18  1      $50.18

Piezīme: Ja jūs neapmierina valūtas izvēle, droši izmantojiet jebkuru citu, bet neaizmirstiet, ka `$` [ir īpaša nozīme](/lv/essentials/strings/escaping-special-characters) Raku virknēs, tāpēc tas tika izvēlēts, lai labāk apgūtu Raku.

## Piemērs

Šī programma nepieņem ievadi, tāpēc tā izdrukā iepriekš minēto tabulu, kad to palaidīsit.

```console
$ raku purchase-table.raku
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}