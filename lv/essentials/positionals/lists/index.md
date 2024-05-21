---
title: Saraksti
---

{% include menu.html %}

Saraksti ir līdzīgi masīviem, bet tie ir nemaināmi. Nav iespējams mainīt saraksta lielumu vai elementus. Izmantojiet iekavas, lai izveidotu sarakstu:

```raku
my $odd = (1, 3, 5, 7, 9);
```

## Sarakstu indeksēšana

Lai piekļūtu atsevišķiem saraksta elementiem, izmantojiet kvadrātiekavas ar indeksu:

```raku
say $odd[3]; # 7
```

Tomēr nav iespējams iestatīt jaunu vērtību:

```raku
$odd[3] = 8; # Nav OK
```

Šāds mēģinājums izraisa izņēmumu:

    Nevar modificēt nemaināmu sarakstu ((1 3 5 7 9))
      blokā <unit> pie t.raku 4. rindas

## Saraksta piešķiršana masīvam

Kas notiek, ja saglabājat sarakstu mainīgajā ar `@` simbolu?

```raku
my @data = (40, 42, 44);
```

Šajā gadījumā `@data` mainīgais satur masīvu, un jūs varat modificēt tā elementus.

%%tipblock
## Mainīgais vs saraksts

Ņemiet vērā, ka fakts, ka saraksti ir nemaināmi, nenozīmē, ka jūs nevarat atkārtoti izmantot mainīgo, kas to satur.

```raku
my $elements = (1, 2);
say $elements[0]; # 1

$elements = (3, 4);
say $elements[0]; # 3
```

%%/tipblock

{% include nav.html %}