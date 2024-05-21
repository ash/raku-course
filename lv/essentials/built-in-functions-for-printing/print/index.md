---
title: Drukas rutīna
---

{% include menu.html %}

Iebūvētā `print` rutīna veic sekojošo:

1. Pārvērš savus argumentus par virkni, izsaucot `Str` metodi uz tiem.
1. Nosūta to uz `STDOUT` plūsmu.

Vienkāršiem datu tipiem, `print` ģenerētais izvads ir līdzīgs [`say`](../say) izvadam bez jaunas rindas rakstzīmes beigās.

```raku
print 42;
print 'Raku';
```

Šīs vērtības tiek izdrukātas viena pēc otras. Arī visa izvada beigās nav jaunas rindas.

```console
$ raku t.raku
42Raku
```

Kopējo datu tipiem rezultāts var atšķirties no tā, ko redzat ar `say`. Piemēram, izmēģiniet masīvus un vārdnīcas:

```raku
my @data = 'alpha', 'beta', 'gamma';
print @data;

print "\n"; # Lai atdalītu daļas

my %data = alpha => 1, beta => 2, gamma => 3;
print %data;
```

Šādi izskatās izvads:

```console
$ raku t.raku
alpha beta gamma
alpha	1
beta	2
gamma	3
```

`print` rutīnu var arī izsaukt kā metodi:

```raku
my @data = 'alpha', 'beta', 'gamma';
@data.print;

"\n".print;
```

{% include nav.html %}