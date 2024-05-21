---
title: Funkciju tipizētie parametri
---

{% include menu.html %}

Raku valodā funkciju parametri var būt ar tipa ierobežojumu. Tas ir ļoti līdzīgi kā [tipizētie mainīgie](/lv/essentials/typed-variables/type-constraints/).

```raku
sub add(Int $x, Int $y) { $x + $y }
```

Funkcija tagad pieprasa, lai tās argumenti būtu veseli skaitļi.

```raku
say add(10, 20);
# say add(pi, e); # Kļūda
```

Mēģinājums nodot jebkura cita tipa parametru, izņemot `Int`, ir kļūda kompilācijas laikā.

```
$ raku t.raku
===SORRY!=== Kļūda kompilējot t.raku
Izsaukums add(Num, Num) nekad nedarbosies ar deklarēto parakstu (Int $x, Int $y)
t.raku:5
------> say ⏏add(pi, e);
```

Pamaniet, ka Raku automātiski nekonvertēs tipus, pat ja tas ir iespējams citos gadījumos.

```raku
# say add('3', '4'); # Kļūda
say '3' + '4'; # OK un ir 7
```

%%tipblock
## Kā noteikt, vai tā ir kļūda kompilācijas laikā
Ja kļūdas ziņojums sākas ar `===SORRY!=== Kļūda kompilējot`, tas nozīmē, ka kļūda notika kompilācijas laikā.
%%/tipblock

{% include nav.html %}