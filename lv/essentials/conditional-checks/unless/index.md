---
title: Izmantojot unless
---

{% include menu.html %}

Visus Būla nosacījumus var viegli noliegt ar [`!` operatoru](/lv/essentials/booleans/operations#negation). Tomēr dažos gadījumos skaidra noliegšana padara izteiksmi smagāku un mazāk lasāmu. Šādos gadījumos `unless` var būt draugs.

`unless` bloks tiek izpildīts, kad tā nosacījums ir `False`.

```raku
my $broken = False;

# ...Kaut kas var iestatīt $broken uz True šeit...
    
unless $broken {
    say "Neuztraucies!";
    say "Esi laimīgs!";
}
```

Salīdziniet divas vienas un tās pašas programmas versijas:

Ar `if` un noliegumu:

```raku
if !$broken { . . . }
```

Ar `unless`:

```raku
unless $broken { . . . }
```

Izvēloties alternatīvas, jūs vienmēr varat izvēlēties to, kas jums šajā situācijā šķiet labāks.

Ņemiet vērā, ka `unless` nevar sekot `else` vai `elsif` bloki. Šajā gadījumā vienīgais veids ir izmantot `if`.

{% include nav.html %}