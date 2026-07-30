---
title: Binding met `:=`
translations_gpt:
---

{% include menu.html %}

Tot nu toe maakte elke variabele die je aanmaakte een nieuwe container aan, en toekenning met `=` plaatste een waarde _in_ die container. Binding, geschreven met `:=`, is anders: het laat een naam verwijzen naar een _bestaande_ container in plaats van een nieuwe aan te maken.

Na binding delen de twee namen dezelfde container, zodat een wijziging via de ene zichtbaar is via de andere:

```raku
my $x = 10;
my $y := $x;

$x = 20;
say $y; # 20
```

Hier kopieert `$y := $x` niet de waarde `10`. Het maakt `$y` een andere naam voor exact dezelfde container als `$x`. Wanneer `$x` later op `20` wordt gezet, geeft het lezen van `$y` ook `20` terug.

Vergelijk dit met gewone toekenning, die de waarde kopieert naar een aparte container:

```raku
my $x = 10;
my $y = $x; # a plain copy

$x = 20;
say $y; # 10
```

Binding werkt ook met arrays. Het volgende maakt `@alias` een andere naam voor `@data`:

```raku
my @data = 1, 2, 3;
my @alias := @data;

@alias[0] = 99;
say @data; # [99 2 3]
```

Nog een detail: als je een naam direct bindt aan een letterlijke waarde, is er geen container erachter, waardoor de naam alleen-lezen wordt:

```raku
my $pi := 3.14;
$pi = 3;
```

```
Cannot assign to an immutable value
  in block <unit> at t.raku line 2
```

{% include nav.html %}
