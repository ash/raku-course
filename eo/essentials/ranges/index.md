---
title: Intervaloj
---

{% include menu.html %}

Intervaloj en Raku generas listojn de sekvencaj eroj.

En la plej simpla kazo, intervalo estas listo de pliiĝantaj entjeraj nombroj. Por krei intervalon, uzu la operatoron `..` kaj la du valorojn, kiuj difinas la minimumajn kaj maksimumajn valorojn de la intervalo:

```raku
1 .. 5
```

Spacoj ĉirkaŭ la operaciilo estas nedevigaj. La sekva konstruo povas esti skribita kiel:

```raku
1..5
```

Dum intervalo estas rimedo por generi listojn, ĝi estas ankoraŭ unuopa objekto, do ĝi povas esti konservita en skalaro variablo:

```raku
my $r = 1 .. 5;
```

## Ne nur nombroj

Eblas konstrui intervalon el aliaj datumtipoj, por kiuj Raku scias kiel pliiĝi ilin. Ekzemple:

```raku
my $letters = 'a' .. 'z';
```

Intervaloj estas objektoj de sia propra datumtipo en Raku. La tipo de la variablo `$r` estas `Range`.

{% include nav.html %}