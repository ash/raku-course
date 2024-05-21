---
title: De print-routine
---

{% include menu.html %}

De ingebouwde routine `print` doet het volgende:

1. Converteert zijn argumenten naar een string door de `Str`-methode op hen aan te roepen.
1. Stuurt het naar de `STDOUT`-stroom.

Voor eenvoudige datatypes is de uitvoer die door `print` wordt gegenereerd vergelijkbaar met de uitvoer van [`say`](../say) zonder het nieuwe regelteken aan het einde.

```raku
print 42;
print 'Raku';
```

Deze waarden worden achter elkaar afgedrukt. Er is ook geen nieuwe regel aan het einde van de hele uitvoer.

```console
$ raku t.raku
42Raku
```

Voor samengestelde gegevens kan het resultaat verschillen van wat je ziet met `say`. Probeer bijvoorbeeld arrays en hashes:

```raku
my @data = 'alpha', 'beta', 'gamma';
print @data;

print "\n"; # Om de delen te scheiden

my %data = alpha => 1, beta => 2, gamma => 3;
print %data;
```

Dit is hoe de uitvoer eruitziet:

```console
$ raku t.raku
alpha beta gamma
alpha	1
beta	2
gamma	3
```

De `print`-routine kan ook als een methode worden aangeroepen:

```raku
my @data = 'alpha', 'beta', 'gamma';
@data.print;

"\n".print;
```

{% include nav.html %}