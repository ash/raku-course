---
title: La noto rutino
---

{% include menu.html %}

La `note` rutino presas siajn argumentojn al la norma erara fluo. En la resto, ĝi estas simila al [`say`](../say).

1. Vokas la `gist` metodon sur siaj argumentoj.
1. Aldonas novlinian karakteron.
1. Konvertas la rezulton al UTF-8.
1. Sendas ĝin al la `STDERR` fluo.

```raku
my $x = 42;
note "Aktuala valoro de \$x estas $x";
```

Konfirmu, ke ĉi tiu programo ne sendas la mesaĝon al `STDOUT`:

```
$ raku t.raku > /dev/null
Aktuala valoro de $x estas 42
```

Se neniu argumento estas pasita al `note`, ĝi presas `Noted` kiel la defaŭltan mesaĝon.

{% include nav.html %}