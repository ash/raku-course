---
title: Pareizā metode
translations_gpt:
---

{% include menu.html %}

Ikdienišķiem skalāriem, piemēram, skaitļiem un virknēm, visi trīs atveidojumi izskatās vienādi. Tie sāk atšķirties saliktām vai nedefinētām vērtībām. Šeit ir `Pair` trijos veidos:

```raku
say (foo => 1).gist; # foo => 1
say (foo => 1).Str;  # foo	1
say (foo => 1).raku; # :foo(1)
```

Aptuvens īkšķa likums:

* [`.gist`](../gist) — izvadei, ko paredzēts *lasīt* cilvēkam (`say`, `note`).
* [`.Str`](../str) — izvadei, kas ir *vienkāršs teksts* (`print`, `put`, interpolācija, operators `~`).
* [`.raku`](../raku-method) — *kodam līdzīgam* atveidojumam atkļūdošanas laikā (`dd`).

Ikvienai no šīm metodēm, rakstot klasi, var dot savu definīciju, tā ka arī jūsu paša objekti izdrukājas glīti. Pie tā atgriezīsimies, kad nākamajā daļā [veidosim klases](/lv/oop/classes).

{% include nav.html %}
