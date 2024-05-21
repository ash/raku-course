---
title: while en until als statement modifiers
---

{% include menu.html %}

Zowel `while` als `until` kunnen worden gebruikt in de vorm van statement modifiers ([op dezelfde manier](/nl/essentials/conditional-checks/modifiers) als `if` en `unless`).

Overweeg een voorbeeld dat modulo deling emuleert:

```raku
my $x = 10;
$x -= 3 while $x > 2;
say $x; # 1
```

Hier is `-=` de operator die zowel aftrekking als toewijzing combineert. In dit geval is `$x -= 3` gelijk aan `$x = $x - 3`.

De `while` modifier laat de statement `$x -= 3` herhalen zolang de conditie `$x > 2` `True` blijft. Zodra deze `False` wordt, stopt de lus.

Merk op dat als de conditie aanvankelijk `False` is, de statement helemaal niet wordt uitgevoerd.

Hetzelfde programma kan worden herschreven met `until`. Hiervoor moet de conditie worden omgekeerd:

```raku
my $x = 10;
$x -= 3 until $x <= 2;
say $x; # 1
```

{% include nav.html %}