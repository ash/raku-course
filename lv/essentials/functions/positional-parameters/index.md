---
title: Pozicionālie parametri
---

{% include menu.html %}

Funkciju parametru secība ir svarīga. Piemēram, izveidojiet funkciju, kas aprēķina starpību starp diviem skaitļiem:

```raku
sub diff($a, $b) { $a - $b }
```

Ir acīmredzams, ka izsaukuma `diff(10, 20)` rezultāts atšķiras no `diff(20, 10)`.

Parametri, kas ir uzskaitīti kā komatiem atdalīts saraksts, kā tas ir iepriekš minētajā funkcijā, tiek saukti par _pozicionāliem_. To nozīme ir atkarīga no kārtības, kādā argumenti tiek nodoti funkcijai, kad tā tiek izsaukta.

{% include nav.html %}