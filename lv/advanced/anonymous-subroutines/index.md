---
title: Anonīmas apakšprogrammas
translations_gpt:
---

{% include menu.html %}

Apakšprogrammai nav obligāti jābūt ar nosaukumu. _Anonīmu_ apakšprogrammu raksta tāpat kā parastu, tikai bez nosaukuma, un parasti to saglabā mainīgajā, lai vēlāk varētu izsaukt.

```raku
my $double = sub ($x) {
    $x * 2
};

say $double(5); # 10
```

Mainīgais `$double` satur apakšprogrammu, un `$double(5)` to izsauc ar argumentu `5`.

## Bultiņu bloki

Raku piedāvā īsāku pierakstu tam pašam — _bultiņas bloku_. Tas parametrus ievada ar bultiņu `->`, un tam nav vajadzīgs ne vārds `sub`, ne iekavas ap parametriem:

```raku
my $double = -> $x {
    $x * 2
};

say $double(5); # 10
```

Šis ir visizplatītākais veids, kā uzrakstīt nelielu anonīmu apakšprogrammu.

## Sigils `&`

Ja vēlaties apakšprogrammu izsaukt pēc nosaukuma, nevis caur `$` mainīgo, deklarējiet mainīgo ar sigilu `&`. Tad to var izsaukt bez sigila, tieši tāpat kā parastu apakšprogrammu:

```raku
my &triple = -> $x {
    $x * 3
};

say triple(4); # 12
```

## Nodošana citai funkcijai

Anonīmu apakšprogrammu nemaz nav obligāti glabāt mainīgajā. Tā kā tā vienkārši ir vērtība, to var nodot tieši funkcijai, kas tādu gaida, — piemēram, `map`, `grep` vai `sort`:

```raku
say (1, 2, 3).map(-> $x { $x * 2 }); # (2 4 6)
```

Bultiņas bloks šeit ir anonīmā apakšprogramma, un `map` to izsauc pa vienai reizei katram elementam. Patiesībā tieši to jūs visu laiku esat darījuši: katrs bloks `{ ... }` un `-> $x { ... }`, ko esat nodevuši `map` un `grep`, ir maza anonīma apakšprogramma, uzrakstīta tieši tur, kur tā vajadzīga, nevis vispirms nosaukta.

{% include nav.html %}
