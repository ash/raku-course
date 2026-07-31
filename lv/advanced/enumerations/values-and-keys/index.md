---
title: Vērtības un atslēgas
translations_gpt:
---

{% include menu.html %}

Katra uzskaitījuma konstante nes gan nosaukumu, gan skaitli. Metode `.value` dod skaitli, bet metode `.key` — nosaukumu kā virkni:

```raku
enum Colour <red green blue>;

say green.value; # 1
say green.key;   # green
```

Automātiskā numerācija no nulles nav obligāta. Rakstiet konstantes kā pārus, lai vērtības izvēlētos pats:

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Tue.value; # 2
say Fri.value; # 5
```

Šeit darba nedēļa numurēta no viena, nevis no nulles.

Pats uzskaitījuma tips var uzskaitīt visas savas konstantes. Metode `.enums` atgriež attēlojumu no katra nosaukuma uz tā vērtību:

```raku
enum Colour <red green blue>;

say Colour.enums;       # Map.new((blue => 2, green => 1, red => 0))
say Colour.enums.elems; # 3
```

Ar `.value`, `.key` un `.enums` varat brīvi pārvietoties no konstantes uz tās skaitli, no skaitļa atpakaļ uz datiem un pāri visai kopai — un tieši tas padara uzskaitījumus noderīgus tādām lietām kā izvēlnes, stāvokļi un uzmeklēšanas tabulas.

{% include nav.html %}
