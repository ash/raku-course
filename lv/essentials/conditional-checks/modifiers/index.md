---
title: Postfix forms of if and unless
---

{% include menu.html %}

Raku piedāvā ļoti ērtu risinājumu, kad vēlaties izpildīt vienkāršu paziņojumu nosacīti. Šajā gadījumā nav nepieciešams izveidot atsevišķu koda bloku. Vienkārši ievietojiet `if` vai `unless` tūlīt pēc paziņojuma. Raku šādas konstrukcijas sauc par _paziņojumu modifikatoriem_.

```raku
say 'Labdien' if $hours > 12;

say 'Visas sistēmas darbojas' unless $broken;
```

{% include nav.html %}