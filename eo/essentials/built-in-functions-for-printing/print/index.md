---
title: La pres-rutino
---

{% include menu.html %}

La enkonstruita rutino `print` faras la jenon:

1. Konvertas siajn argumentojn al ĉeno per vokado de la metodo `Str` sur ili.
1. Sendas ĝin al la fluo `STDOUT`.

Por simplaj datumtipoj, la eligo generita de `print` estas simila al la eligo de [`say`](../say) sen la linifina signo ĉe la fino.

```raku
print 42;
print 'Raku';
```

Ĉi tiuj valoroj estas presitaj unu post la alia. Ankaŭ ne estas linifina signo ĉe la fino de la tuta eligo.

```console
$ raku t.raku
42Raku
```

Por agregitaj datumoj, la rezulto povas diferenci de tio, kion vi vidas kun `say`. Ekzemple, provu tabelojn kaj asocitabelojn:

```raku
my @data = 'alpha', 'beta', 'gamma';
print @data;

print "\n"; # Por apartigi la partojn

my %data = alpha => 1, beta => 2, gamma => 3;
print %data;
```

Jen kiel la eligo aspektas:

```console
$ raku t.raku
alpha beta gamma
alpha	1
beta	2
gamma	3
```

La rutino `print` ankaŭ povas esti vokita kiel metodo:

```raku
my @data = 'alpha', 'beta', 'gamma';
@data.print;

"\n".print;
```

{% include nav.html %}