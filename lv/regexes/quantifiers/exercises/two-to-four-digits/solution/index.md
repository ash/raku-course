---
title: 'Risinājums: No diviem līdz četriem cipariem'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say 'abc12345' ~~ / \d ** 2..4 /;
```

🦋 Atrodiet programmu failā [two-to-four-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/two-to-four-digits.raku).

## Izvade

```
｢1234｣
```

## Komentāri

1. `\d ** 2..4` piemeklē no diviem līdz četriem cipariem pēc kārtas.

1. Virknē ir pieejami pieci cipari, taču diapazons sakritību ierobežo līdz četriem, tāpēc raksturs paņem `1234` un atstāj pēdējo `5`. Būdams rijīgs, tas paņem visvairāk, cik diapazons ļauj, nevis vismazāk.

1. Rijība attiecas tikai uz vienu sakritību — dzinējs joprojām apstājas **pirmajā** vietā, kur raksturs izdodas. Pat ja garāka ciparu virkne parādās vēlāk virknē, tā netiek sasniegta nemaz:

    ```raku
    say 'abc123def6789012z' ~~ / \d ** 2..4 /;   # ｢123｣
    ```

    Šeit tiek piemeklēts `123`, lai gan vēlākā virtene `6789012` būtu piepildījusi visu diapazonu ar `6789`. Uzvar sakritība, kas ir pa kreisi.

{% include nav.html %}
