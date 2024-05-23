---
title: Paroj
---

{% include menu.html %}

Paro estas datumstrukturo kiu konservas nomon kaj valoron. Ili formas solidan objekton kiu povas esti stokita en skalarvariablo. Jen ekzemplo de kiel vi kreas paron:

```raku
my $pair = name => 'Anna';
```

La tipo de la variablo `$pair` estas `Pair`:

```raku
say $pair.WHAT; # (Pair)
```

Eblas aliri la nomon kaj la valoron aparte uzante la respektivajn metodojn `key` kaj `value`:

```raku
say $pair.key; # name
say $pair.value; # Anna
```

Grava trajto de paroj estas ke ili estas nemoveblaj objektoj. Tio signifas ke vi ne povas asigni novan valoron aŭ doni novan nomon al ekzistanta paro. Sed vi povas asigni tute novan paron al la sama variablo, kompreneble:

```raku
my $pair = name => 'Anna';
$pair = name => 'John';
say $pair.value; # John
```

## Subskribo

Estas alia metodo por legi la valoron de paro. Vi povas subskribi ĝin per la nomo de ĝia ŝlosilo inter angulaj krampoj. Jen kiel vi faras tion:

```raku
say $pair<name>;
```

Rimarku ke ne necesas citi la nomon de la ŝlosilo se ĝi ne enhavas spacojn. Se ĝi enhavas, aferoj fariĝas iom pli striktaj:

```raku
my $pair = 'employee name' => 'Julie Madelon';
say $pair{'employee name'};
```

Ne preterlasu la fakton ke kurbaj krampoj estas uzataj ĉi-foje.

{% include nav.html %}