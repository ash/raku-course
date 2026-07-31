---
title: Noklusējuma vērtības
---

{% include menu.html %}

Kad tiek izveidots jauns skalārais mainīgais bez tūlītējas piešķiršanas, konteineris joprojām satur vērtību — tā noklusējuma vērtību. Precīzais noklusējums ir atkarīgs no mainīgā tipa.

Zemāk redzamā programma nav labākais veids, kā lietot Raku, taču tā ilustrē būtību:

```raku
my $int;
say $int + 5;
```

Izvade satur `5`, kas var būt sagaidāms, ja pieņemat, ka `$int` noklusējuma vērtība ir `0`. Tomēr programma arī izdrukā brīdinājumu:

```
Use of uninitialized value $int of type Any in numeric context
  in block <unit> at t.raku line 2
5
```

Lai novērstu šo nenoteiktību, vai nu piešķiriet vērtību tieši:

```raku
my $int = 0;
say $int + 5; # 5
```

Vai deklarējiet noklusējuma vērtību ar `is default` iezīmi:

```raku
my $int is default(0);
say $int + 5; # 5
```

Noklusējuma vērtība nav ierobežota ar nulli. Tā var būt jebkura vērtība, ko uzskatāt par piemērotu kandidātu, piemēram:

```raku
my $int is default(1);
say $int + 5; # 6
```

{% include nav.html %}
