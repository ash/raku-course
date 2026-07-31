---
title: Operatoru uzvedības pārskats
---

{% include menu.html %}

Kad izteiksmē ir vairāki operatori, Raku ir jāizlemj, kādā secībā tos piemērot. To nosaka divi noteikumi: _prioritāte_ un _asociativitāte_.

## Prioritāte

Prioritāte nosaka, kurš operators saistās ciešāk. Reizināšanai ir augstāka prioritāte nekā saskaitīšanai, tāpēc tā tiek izpildīta pirmā:

```raku
say 2 + 3 * 4; # 14
```

Izteiksme tiek lasīta kā `2 + (3 * 4)`, kas dod `14`, nevis `20`. Jūs vienmēr varat izmantot iekavas, lai noteiktu citu secību:

```raku
say (2 + 3) * 4; # 20
```

## Asociativitāte

Asociativitāte nosaka secību starp operatoriem ar _vienādu_ prioritāti. Atņemšana ir kreisi asociatīva, tāpēc tā grupējas no kreisās puses:

```raku
say 8 - 3 - 2; # 3
```

Tas ir `(8 - 3) - 2`, kas ir `3`. Kāpināšana, savukārt, ir labēji asociatīva:

```raku
say 2 ** 3 ** 2; # 512
```

Šeit izteiksme grupējas kā `2 ** (3 ** 2)`, tas ir `2 ** 9`, kas ir `512`.

## Ķēdētas salīdzināšanas

Salīdzināšanas operatorus var _ķēdēt_, kas lasās dabiski un darbojas tā, kā sagaidāms no matemātikas:

```raku
say 1 < 2 < 3; # True
say 1 < 5 < 3; # False
```

Vidējā vērtība tiek salīdzināta ar abiem kaimiņiem: `1 < 2 < 3` ir patiess, jo gan `1 < 2`, gan `2 < 3` ir patiesi.

{% include nav.html %}
