---
title: Typographia
---

{% include menu.html %}

`print` munus aedificatum facit haec:

1. Argumenta sua ad chordam convertit vocando methodum `Str` in eis.
1. Mittit ad rivum `STDOUT`.

Pro simplicibus generibus datarum, output generatum a `print` simile est output [`say`](../say) sine charactere novae lineae in fine.

```raku
print 42;
print 'Raku';
```

Hae valores unus post alium imprimuntur. Non est nova linea in fine totius output, quoque.

```console
$ raku t.raku
42Raku
```

Pro aggregatis datis, eventus potest differre ab eo quod vides cum `say`. Exempli gratia, tenta arrays et hashes:

```raku
my @data = 'alpha', 'beta', 'gamma';
print @data;

print "\n"; # Ad separandas partes

my %data = alpha => 1, beta => 2, gamma => 3;
print %data;
```

Sic aspicit output:

```console
$ raku t.raku
alpha beta gamma
alpha	1
beta	2
gamma	3
```

`print` munus etiam potest vocari ut methodus:

```raku
my @data = 'alpha', 'beta', 'gamma';
@data.print;

"\n".print;
```

{% include nav.html %}