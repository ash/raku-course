---
title: Tipu konvertēšana, izmantojot konstruktoru formas
---

{% include menu.html %}

Līdzīga metode ir izveidot jaunu nepieciešamā tipa objekta instanci, izsaucot tā konstruktoru, kura nosaukums ir tipa nosaukums. Piemēram:

```raku
my $n = Int('1.23E4');
say $n;      # 12300
say $n.WHAT; # (Int)
```

Šeit virkne, kas satur peldošā punkta skaitli, tiek konvertēta uz veselu skaitli.

{% include nav.html %}