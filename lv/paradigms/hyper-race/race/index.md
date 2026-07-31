---
title: Nesakārtots paralēlisms ar race
translations_gpt:
---

{% include menu.html %}

`.race` paralelizē tāpat kā `.hyper`, ar vienu atšķirību: tā **nesola** atgriezt rezultātus secībā. Kurš darbinieks pabeidz pirmais, tā rezultāts nonāk pirmais.

```raku
say (1..10).race.map(* ** 2).sort; # (1 4 9 16 25 36 49 64 81 100)
```

Kvadrāti atgriežas neparedzamā secībā, tāpēc `.sort` ir klāt, lai izvade būtu noteikta. Ja mēs izdrukātu bez kārtošanas, visi skaitļi būtu klāt, bet, iespējams, sajaukti.

Tā kā tai nav jāpatur rezultāti sakārtoti, `.race` var būt mazliet mazākas pieskaitāmās izmaksas nekā `.hyper`. Kompromiss ir vienkāršs:

* izmantojiet `.hyper`, kad svarīga ir rezultātu **secība**;
* izmantojiet `.race`, kad tā **nav** svarīga — piemēram, kad jūs rezultātus gatavojaties saskaitīt, saskaitīt elementus vai citādi apvienot no secības neatkarīgā veidā.

```raku
say (1..100).race.map(* * 2).sum; # 10100
```

Saskaitīšana ir neatkarīga no secības, tāpēc `.race` šeit ir laba izvēle un dod to pašu `10100`. Abas metodes ir par vienu un to pašu domu — ļaut neatkarīgam darbam notikt vienlaikus —, un starp tām izvēlas pēc tā, vai jums rūp secība.

{% include nav.html %}
