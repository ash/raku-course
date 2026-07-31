---
title: Secību raksti
translations_gpt:
---

{% include menu.html %}

Operators `...` atpazīst ne tikai aritmētiskus soļus.

Ja tam dodat trīs vērtības, kas aug reizinoties, tas turpina ar _ģeometrisku_ virkni:

```raku
say 1, 2, 4 ... 64; # (1 2 4 8 16 32 64)
```

Šeit katra vērtība ir divreiz lielāka par iepriekšējo, tāpēc virkne dubultojas, līdz sasniedz `64`.

Virknes neaprobežojas ar skaitļiem. Ar virknēm Raku seko dabiskajai alfabētiskajai secībai:

```raku
say 'a' ... 'e'; # (a b c d e)
```

Virkne var arī skaitīt lejup. Kad beigu punkts ir mazāks par sākumu, vērtības samazinās:

```raku
say 10 ... 1; # (10 9 8 7 6 5 4 3 2 1)
```

Katrā gadījumā likumsakarību aprakstāt ar piemēru, un operators `...` aizpilda pārējo.

{% include nav.html %}
