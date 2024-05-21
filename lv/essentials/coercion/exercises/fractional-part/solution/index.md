---
title: 'Risinājums: Daļskaitļa daļa'
---

{% include menu.html %}

Lai iegūtu skaitļa daļskaitļa daļu, jūs varat atņemt veselo daļu, kuru var iegūt, pārveidojot skaitli par `Int`.

## Kods

Iespējamais risinājums ir parādīts zemāk:

```raku
my $n = 15.8972;
say $n - $n.Int;
```

🦋 Atrodiet programmu failā [fractional-part.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/fractional-part.raku).

## Izvade

```console
$ raku exercises/coercion/fractional-part.raku
0.8972
```

## Komentārs

Izmēģiniet to pašu programmu arī ar negatīviem skaitļiem, piemēram:

```raku
my $n = -15.8972;
say $n - $n.Int;
```

Šajā gadījumā rezultātam arī jābūt pareizam:

```console
$ raku exercises/coercion/fractional-part.raku
-0.8972
```

{% include nav.html %}