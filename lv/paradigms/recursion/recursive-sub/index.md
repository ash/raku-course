---
title: Rekursīva apakšprogramma
translations_gpt:
---

{% include menu.html %}

_Rekursīva_ apakšprogramma ir tāda, kas izsauc pati sevi. Klasiskais piemērs ir faktoriāls: skaitļa `n` faktoriāls ir `n` reiz `n - 1` faktoriāls.

```raku
sub fact($n) {
    $n <= 1 ?? 1 !! $n * fact($n - 1);
}

say fact(5); # 120
```

Lasiet ķermeni kā divus gadījumus, ko savieno trejdaļīgais operators `?? !!`:

* kad `$n` ir `1` vai mazāk, atbilde ir vienkārši `1`;
* citādi atbilde ir `$n` reiz `fact($n - 1)` — tā pati apakšprogramma, izsaukta ar mazāku skaitli.

Katrs izsaukums nolobī vienu reizinātāju un pieprasa mazāku faktoriālu, līdz skaitlis sasniedz `1` un izsaukumi attinas: `fact(5)` ir `5 * fact(4)`, kas ir `5 * 4 * fact(3)`, un tā tālāk lejup līdz `1`.

Rekursija ļoti tieši izsaka daudzus uzdevumus. Ikreiz, kad uzdevumu var aprakstīt ar mazāku tā paša uzdevuma versiju, rekursīva apakšprogramma bieži ir dabiskākais veids, kā to uzrakstīt.

{% include nav.html %}
