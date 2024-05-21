---
title: while un until kā teikuma modifikatori
---

{% include menu.html %}

Gan `while`, gan `until` var izmantot teikuma modifikatoru formā ([līdzīgi](/lv/essentials/conditional-checks/modifiers) kā `if` un `unless`).

Apsveriet piemēru, kas imitē dalīšanu ar atlikumu:

```raku
my $x = 10;
$x -= 3 while $x > 2;
say $x; # 1
```

Šeit `-=` ir operators, kas apvieno gan atņemšanu, gan piešķiršanu. Šajā gadījumā `$x -= 3` ir ekvivalents `$x = $x - 3`.

`while` modifikators ļauj teikumam `$x -= 3` atkārtoties, kamēr nosacījums `$x > 2` paliek `True`. Tiklīdz tas kļūst `False`, cilpa apstājas.

Pamaniet, ka, ja nosacījums sākotnēji ir `False`, teikums netiek izpildīts vispār.

To pašu programmu var pārrakstīt ar `until`. Šim nolūkam nosacījums ir jāapgriež:

```raku
my $x = 10;
$x -= 3 until $x <= 2;
say $x; # 1
```

{% include nav.html %}