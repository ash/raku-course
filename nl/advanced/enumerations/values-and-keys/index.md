---
title: Waarden en sleutels
translations_gpt: Dutch
---

{% include menu.html %}

Elke enum-constante draagt zowel een naam als een getal. De methode `.value` geeft het getal, en de methode `.key` geeft de naam als een tekenreeks:

```raku
enum Colour <red green blue>;

say green.value; # 1
say green.key;   # green
```

Je hoeft de automatische nummering vanaf nul niet te accepteren. Schrijf de constanten als paren om zelf de waarden te kiezen:

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Tue.value; # 2
say Fri.value; # 5
```

Hier is de werkweek genummerd vanaf één in plaats van nul.

Het enum-type zelf kan al zijn constanten opsommen. De methode `.enums` geeft een map van elke naam naar zijn waarde:

```raku
enum Colour <red green blue>;

say Colour.enums;       # Map.new((blue => 2, green => 1, red => 0))
say Colour.enums.elems; # 3
```

Met `.value`, `.key` en `.enums` kun je vrij schakelen van een constante naar zijn getal, van een getal terug naar gegevens, en over de hele verzameling — en dat is wat enums nuttig maakt voor zaken als menu's, toestanden en opzoektabellen.

{% include nav.html %}
