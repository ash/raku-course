---
title: 'Risinājums: Loģiskās tabulas'
---

{% include menu.html %}

Šeit ir iespējama programma, kas izdrukā visus Būla operāciju rezultātus.

## Kods

```raku
say 'True && True ir ', True && True; 
say 'True && False ir ', True && False;
say 'False && True ir ', False && True;
say 'False && False ir ', False && False;

say 'True || True ir ', True || True; 
say 'True || False ir ', True || False;
say 'False || True ir ', False || True;
say 'False || False ir ', False || False;

say 'True ^^ True ir ', True ^^ True; 
say 'True ^^ False ir ', True ^^ False;
say 'False ^^ True ir ', False ^^ True;
say 'False ^^ False ir ', False ^^ False;
```

🦋 Pilnu kodu var atrast failā [tables.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/tables.raku).

## Izvade

Palaidiet programmu, un tā izdrukās sekojošo tabulu.

```console
$ raku tables.raku
True && True ir True
True && False ir False
False && True ir False
False && False ir False
True || True ir True
True || False ir True
False || True ir True
False || False ir False
True ^^ True ir Nil
True ^^ False ir True
False ^^ True ir True
False ^^ False ir False
```

## Komentāri

Ņemiet vērā, ka augstākās prioritātes dēļ Būla operācijām nav nepieciešams tās likt iekavās. Tas gan neattiecas, ja izmantojat virknes konkatenāciju:

```raku
say 'True && True ir ' ~ (True && True);
```

Alternatīvi, varat izmantot [koda interpolāciju](/lv/essentials/strings/code-interpolation).

{% include nav.html %}