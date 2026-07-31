---
title: Automātiskā pavedienošana
translations_gpt:
---

{% include menu.html %}

Kad savienojumu padodat kaut kam, kas gaida vienu vērtību — salīdzinājumam vai parastai funkcijai —, Raku klusi piemēro šo darbību **katrai** aiz savienojuma stāvošajai vērtībai un rezultātus atkal savieno savienojumā. To sauc par _automātisko pavedienošanu_ (_autothreading_).

Piemēram, pieskaitīšana savienojumam pieskaita katrai tā vērtībai:

```raku
my $j = 1 | 2 | 3;
say $j + 10; # any(11, 12, 13)
```

`+ 10` tika piemērots atsevišķi `1`, `2` un `3`, dodot jaunu _any_ savienojumu `any(11, 12, 13)`.

Salīdzinājumā apvienotais rezultāts sabrūk vienā patiesuma vērtībā atbilstoši savienojuma veidam:

```raku
say so all(3, 7, 2) > 0;  # True  — katra vērtība ir pozitīva
say so all(3, -1, 2) > 0; # False — ne visas ir pozitīvas
say so none(1, 2, 3) == 5; # True — neviena no tām nav 5
```

Tieši automātiskā pavedienošana padara savienojumus tik lakoniskus: viens salīdzinājums pārbauda daudzas vērtības. Konceptuāli pārbaudes ir neatkarīgas, tāpēc Raku ir brīvs tās izpildīt paralēli — un tieši tāpēc savienojumi dabiski iederas konkurences rīku komplektā.

{% include nav.html %}
