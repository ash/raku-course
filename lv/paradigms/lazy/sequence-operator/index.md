---
title: Virknes operators
translations_gpt:
---

{% include menu.html %}

Virknes operators `...` uzbūvē sarakstu no sākuma parauga līdz gala vērtībai. Dodiet tam pirmos dažus elementus un galapunktu, un tas izdomās, kā rinda turpinās:

```raku
say (2, 4 ... 10); # (2 4 6 8 10)
```

No `2, 4` tas secina «katru reizi pieskaiti divi» un turpina, līdz sasniedz `10`. Solis var būt arī uz leju:

```raku
say (10, 8 ... 2); # (10 8 6 4 2)
```

Ja elementi aug nevis saskaitot, bet reizinot, operators pamana arī to:

```raku
say (1, 2, 4 ... 64); # (1 2 4 8 16 32 64)
```

Šeit katrs loceklis ir divkārt lielāks par iepriekšējo, tāpēc virkne ir ģeometriska.

Kad likums ir sarežģītāks, nekā operators spēj uzminēt, jūs varat to tieši norādīt kā iepriekšējo elementu slēgumu. Piemēram, tiešs «pieskaiti soli» likums:

```raku
say (1, * + 2 ... 9); # (1 3 5 7 9)
```

Bloks `* + 2` pasaka, kā no pašreizējā elementa iegūt nākamo. Ar to `...` var izteikt jebkuru virkni, ko spējat aprakstīt ar likumu.

{% include nav.html %}
