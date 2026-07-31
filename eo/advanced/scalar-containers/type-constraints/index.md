---
title: Tipaj limigoj
---

{% include menu.html %}

En la [parto Bazaĵoj](/eo/essentials/typed-variables/type-constraints/) vi vidis kiel agordi la tipon de variablo per tipa limigo. Indas emfazi, ke estas la _ujo_ kiu devigas ĉi tiun limigon sur la valoroj, kiujn ĝi rajtas akcepti.

La sekva deklaro kreas skalaran ujon, kiu povas enhavi nur entjerojn:

```raku
my Int $int;
```

Tipigita ujo akceptas nur la valorojn, kiuj konformas al sia tipo, do ĉiuj sekvaj asignoj estas validaj:

```raku
my Int $int;

$int = 123;       # rekte entjero
say $int;

$int = 100 + 23;  # la rezulto estas entjero
say $int;

$int = '123'.Int; # ĉeno konvertita al entjero
say $int;
```

Raku ne faras aŭtomatan tipkonverton en ĉi tiu kazo. Asigni glitkomaban nombron (kiu estas valoro de tipo `Rat` en Raku) do ne estas permesata:

```raku
my Int $int;
$int = 123.45;
```

Vi jam ricevas eraron dum kompiltempo:

```
===SORRY!=== Error while compiling t.raku
Cannot assign a literal of type Rat (123.45) to a variable ($int) of
type Int.  You can declare the variable to be of type Real, or try to
coerce the value with 123.45.Int or Int(123.45), or just write the value
as 123.
at t.raku:2
------> <BOL>⏏$int = 123.45;
```

Por eviti la eraron, konvertu la valoron eksplicite:

```raku
my Int $int;

$int = 123.45.Int;
say $int; # 123
```

Ne konfuziĝu pro la du punktoj en `123.45.Int`. La unua estas la decimala punkto; la dua vokas la metodon `Int` sur la racionala (`Rat`) valoro.

{% include nav.html %}
