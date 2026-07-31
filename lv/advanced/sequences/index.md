---
title: Secības
translations_gpt:
---

{% include menu.html %}

_Virkne_ ir sakārtota vērtību rinda, kas tiek radīta cita pēc citas. Raku virknes būvē ar operatoru `...`, kas no dotajām vērtībām izsecina likumsakarību un ģenerē pārējo līdz beigu punktam.

Vienkāršākais gadījums skaita no vienas vērtības līdz citai:

```raku
say 1 ... 5; # (1 2 3 4 5)
```

Ja norādāt divas sākuma vērtības, Raku paņem soli starp tām un turpina ar to pašu soli. Tā veido aritmētisku virkni:

```raku
say 1, 3 ... 11; # (1 3 5 7 9 11)
```

Šeit sākuma vērtības `1, 3` nosaka soli divi, tāpēc Raku skaita pa diviem un apstājas, tiklīdz sasniedz `11`.

Vērtība, ko rada `...`, ir `Seq` tipa:

```raku
say (1 ... 5).WHAT; # (Seq)
```

Nākamie temati parāda citas likumsakarības, ko operators `...` atpazīst, un to, kā virkne var būt slinka — pat bezgalīga.

{% include nav.html %}
