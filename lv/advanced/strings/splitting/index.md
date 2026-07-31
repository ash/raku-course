---
title: Sadalīšana un apvienošana
---

{% include menu.html %}

Virknes var sadalīt daļās un salikt atpakaļ kopā vairākos veidos.

Metode `words` sadala virkni vārdu sarakstā, atdalot pēc atstarpēm:

```raku
say 'Hello big World'.words; # (Hello big World)
```

Metode `split` sadala virkni pie jūsu izvēlēta atdalītāja:

```raku
say 'a,b,c'.split(','); # (a b c)
```

Svarīgs īpašs gadījums ir sadalīšana pie **tukšās virknes** `''`: tā sadala virkni atsevišķās rakstzīmēs, bet arī ievieto tukšu virkni pašā sākumā un beigās, tāpēc rezultātam ir par diviem elementiem vairāk, nekā varētu gaidīt:

```raku
say 'abc'.split('').elems;        # 5 — trīs burti, plus tukša virkne katrā galā
say 'abc'.split('', :skip-empty); # (a b c) — adverbs :skip-empty izlaiž tukšos
```

Lai sadalītu rakstzīmēs, metode `comb`, izsaukta bez argumentiem, dara to tieši — bez liekām tukšām virknēm:

```raku
say 'Raku'.comb; # (R a k u)
```

Lai dotos pretējā virzienā, metode `join` salīmē vērtību sarakstu vienā virknē, ievietojot atdalītāju starp tām:

```raku
say <a b c>.join('-'); # a-b-c
```

Vēl divas metodes strādā ar virknes daļām. Metode `substr` izgriež gabalu, norādot sākuma pozīciju un, pēc izvēles, garumu:

```raku
say 'Hello World'.substr(0, 5); # Hello
say 'Hello World'.substr(6);    # World
```

Un `trim` noņem atstarpes no abiem virknes galiem:

```raku
say '  hi  '.trim; # hi
```

{% include nav.html %}
