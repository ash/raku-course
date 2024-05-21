---
title: Tipu ierobežojumi
---

{% include menu.html %}

Raku ir valoda ar tā saucamo pakāpenisko tipu sistēmu. Vairumā gadījumu jums nav jāuztraucas par mainīgā tipa norādīšanu. Tomēr dažos gadījumos jūs varat vēlēties ierobežot konkrētā mainīgā tipu, un to var izdarīt, norādot tipu, kā parādīts zemāk:

```raku
my Int $var = 42;
```

Tagad ir iespējams piešķirt citu veselu skaitli `$var`, bet mēģinājums ievietot virkni vai pat peldošā punkta skaitli beigsies ar izņēmumu:

```raku
my Int $var = 42;
$var = '314E-2';
```

Šī programma izmet šādu kļūdu:

    Type check failed in assignment to $var; expected Int but got Str ("314E-2")
      in block <unit> at t.raku line 2

{% include nav.html %}